import { observable, action } from 'mobx'
import axios from 'axios'

export class InputStore {
    @observable searchInput = ''
    @observable ingredientOptions = []

    @action handleInput = ({ target }) => {
        this[target.id] = target.value
        console.log(this.searchInput)
        this.searchIngredient()
    }

    @action async searchIngredient() {
        let response = await axios(`http://localhost:3001/recipe/ingredient/search?input=${this.searchInput}`)
        console.log(response)
        // this.ingredientOptions = response.data
    }
}