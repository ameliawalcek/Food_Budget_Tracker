const axios = require('axios').default
require("dotenv").config()
const { SPOONACULAR_API_KEY, SPOONACULAR_API_KEY_TWO } = process.env

class FoodAPI {
    constructor() {
        this.baseUrl = `https://api.spoonacular.com`
        this.baseRecipeUrl = `https://api.spoonacular.com/recipes`
        this.key = SPOONACULAR_API_KEY
        // this.key = SPOONACULAR_API_KEY_TWO
    }

    async getRecipeById(id) {
        const [
            overview,
            cost,
            instructions
        ] =
            await Promise.all([
                this.getOverviewById(id),
                this.getCostById(id),
                this.getInstructionsById(id)
            ])
                .catch(e => console.log(e.response))
        return {
            overview,
            cost,
            instructions
        }
    }

    async getOverviewById(id) {
        return (await axios(`${this.baseRecipeUrl}/${id}/information?includeNutrition=true&apiKey=${this.key}`)).data
    }

    async getCostById(id) {
        return (await axios(`${this.baseRecipeUrl}/${id}/priceBreakdownWidget.json?apiKey=${this.key}`)).data
    }

    async getInstructionsById(id) {
        return (await axios(`${this.baseRecipeUrl}/${id}/analyzedInstructions?apiKey=${this.key}`)).data
    }

    async getRecipeByIngredients(ingredients) {
        return (await axios(`${this.baseRecipeUrl}/findByIngredients?apiKey=${this.key}&ingredients=${ingredients}number=5`))
    }

    async searchIngredient(ingredient) {
        return (await axios(`${this.baseUrl}/food/ingredients/autocomplete?apiKey=${this.key}&query=${ingredient}&number=1`)).data
    }

    async getRecipesByBulk(ids) {
        return (await axios(`${this.baseRecipeUrl}/informationBulk?apiKey=${this.key}&ids=${ids}`))
    }

    async getIngredientInfo(id) {
        return (await axios(`${this.baseRecipeUrl}/food/ingredients/${id}/information`))
    }

    // async getRecipeDetails(id, string){
    //     return (await axios(`${this.baseRecipeUrl}/${id}/${string}?apiKey=${this.key}`)).data
    // }
    // this.getOverviewById(id),
    // this.getRecipeDetails(id, 'nutritionWidget.json'),
    // this.getRecipeDetails(id, 'priceBreakdownWidget.json'),
    // this.getRecipeDetails(id, 'analyzedInstructions')
}

module.exports = FoodAPI;
