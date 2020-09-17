const Models = require("../models/Models")
const axios = require('axios').default

class FoodAPI {
    constructor() {
        this.baseUrl = `https://api.spoonacular.com/`
        this.key = process.env.SPOONACULAR_API_KEY
    }

    async getRecipeByIngredients(ingredients) {
        return (await axios(`${this.baseUrl}recipes/findByIngredients?apiKey=${this.key}&ingredients=${ingredients}number=10`))
    }

    async searchIngredient(ingredient) {
        return (await axios(`${this.baseUrl}food/ingredients/autocomplete?apiKey=${this.key}&query=${ingredient}&number=10`)).data
    }
}

module.exports = FoodAPI;
