import { observable, action } from 'mobx'

export class UserStore {
    @observable budget
    @observable pantry = []
    @observable shoppingList = []
    @observable favoriteRecipes = []
    @observable plannedRecipes = []
    @observable darkState = JSON.parse(localStorage.dark || 'false')

    @action handleDarkStateChange = () => {
        this.darkState = !this.darkState
        localStorage.setItem("dark", this.darkState)
      }
}