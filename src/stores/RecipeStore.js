import { observable, action } from 'mobx'
import axios from 'axios'

export class RecipeStore {
    @observable searchIngredientList = []

    @action async getRecipeByIngredients(ingredients) {
        let data = { 'ingredientList': ingredients }
        return await axios.post(`http://localhost:3001/recipie/ingredients`, data).data
    }
}