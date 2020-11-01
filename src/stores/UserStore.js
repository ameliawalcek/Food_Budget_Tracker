import { observable, action } from 'mobx'
import axios from "axios"
import { parseCookie, setCookie, deleteCookie } from "../utils/utils"

export class UserStore {
    @observable user = {}
    @observable isLoggedIn = false
    @observable loading = false
    @observable darkState = JSON.parse(localStorage.dark || 'false')

    @action setLogIn = (bool) => this.isLoggedIn = bool

    @action setLoading = (bool) => this.loading = bool

    @action cookieLogOut = () => deleteCookie()

    @action handleDarkStateChange = () => {
        this.darkState = !this.darkState
        localStorage.setItem("dark", this.darkState)
    }

    @action async getUserById(id) {
        let user = await axios.get(`http://localhost:3001/user/${id}`)
        this.user = user.data
    }

    @action saveNewUser = async (newUser) => {
        return await axios.post("http://localhost:3001/auth/signup", newUser)
            .then(res => {
                this.user = res.data
                this.setLogIn(true)
                setCookie(res.data._id)
                return res
            })
    }

    @action async checkUser(user) {
        return await axios.post("http://localhost:3001/auth/login", user)
            .then(res => {
                this.setLogIn(true)
                setCookie(res.data._id)
                this.getUserById(res.data._id)
                return res.data.msg
            }).catch(e => e.response)
    }

    @action cookieLogIn = () => {
        const cookie = parseCookie()
        this.setLoading(true)
        if (cookie) {
            return axios
                .post(`http://localhost:3001/auth/cookie`, { cookie })
                .then(d => {
                    this.getUserById(cookie)
                    this.setLogIn(true)
                    this.setLoading(false)
                    return d
                })
                .catch(e => e.response)
        }
        this.setLoading(false)
        return false
    }

    @action addItem = async (itemId, listName) => {
        this.user[listName].push(itemId)
        await axios.post(`http://localhost:3001/user/item`,
            { userId: this.user._id, itemId, listName })
    }

    @action deleteItem = async (itemId, listName) => {
        this.user[listName] = this.user[listName]
            .filter(item => item !== itemId)
        await axios.put(`http://localhost:3001/user/item`,
            {
                userId: this.user._id,
                itemId: itemId,
                listName: listName
            })
    }
}