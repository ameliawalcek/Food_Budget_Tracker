import { observable, action } from 'mobx'
import axios from 'axios'

export class RecipeStore {
    @observable searchIngredientList = []
    @observable recipeResults = []
    @observable recipe = []
    @observable loading = false

    @action setLoading = (bool) => this.loading = bool

    @action async getRecipeById(id) {
        this.setLoading(true)
        let response = await axios.get(`http://localhost:3001/recipe/${id}`)
        console.log(response)
        this.recipe = response.data
        this.setLoading(false)
    }

    @action async getRecipeByIngredients() {
        this.setLoading(true)
        let data = { 'ingredientList': this.searchIngredientList }
        let response = await axios.post(`http://localhost:3001/recipe/ingredients`, data)
        this.setLoading(false)
        this.recipeResults = response.data
    }

    @action handleTags = searchTags => this.searchIngredientList = searchTags

    @action cleanRecipeData = () => this.recipe = []
}