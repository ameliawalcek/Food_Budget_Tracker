import { observable } from 'mobx'

export class UserStore {
    @observable budget
    @observable pantry = []
    @observable shoppingList = []
    @observable favoriteRecipes = []
    @observable plannedRecipes = []
}