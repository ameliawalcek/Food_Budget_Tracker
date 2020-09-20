import { observable, action } from 'mobx'
import axios from 'axios'

export class InputStore {
    @observable searchInput = ''
    @observable ingredientOptions = [{ name: ' ' }]
    @observable ingredientTags = []

    @action handleInput = ({ target }) => {
        this[target.id] = target.value
        this.searchIngredient()
    }

    @action async searchIngredient() {
        let response = await axios(`http://localhost:3001/recipe/ingredient/search?input=${this.searchInput}`)
        this.ingredientOptions = response.data
    }
}