const axios = require('axios').default

class FoodAPI {
    constructor() {
        this.baseUrl = `https://api.spoonacular.com/`
        this.baseRecipeUrl = `https://api.spoonacular.com/recipes`
        this.key = process.env.SPOONACULAR_API_KEY
    }

    async getRecipeById(id) {
        const [overview, ingredients, nutrition, cost, instructions] =
            await Promise.all([
                this.getOverviewById(id),
                this.getIngredientsById(id),
                this.getNutritionById(id),
                this.getCostById(id),
                this.getInstructionsById(id)
            ]).catch(e => console.log(e.response))
        return { overview, ingredients, nutrition, cost, instructions }
    }

    async getOverviewById(id) {
        return (await axios(`${this.baseRecipeUrl}/${id}/information?includeNutrition=true&apiKey=${this.key}`)).data
    }

    async getIngredientsById(id) {
        return (await axios(`${this.baseRecipeUrl}/${id}/ingredientWidget.json?apiKey=${this.key}`)).data.ingredients
    }

    async getNutritionById(id) {
        return (await axios(`${this.baseRecipeUrl}/${id}/nutritionWidget.json?apiKey=${this.key}`)).data
    }

    async getCostById(id) {
        return (await axios(`${this.baseRecipeUrl}/${id}/ingredientWidget.json?apiKey=${this.key}`)).data.ingredients
    }

    async getInstructionsById(id) {
        return (await axios(`${this.baseRecipeUrl}/${id}/analyzedInstructions?apiKey=${this.key}`)).data
    }

    async getRecipeByIngredients(ingredients) {
        return (await axios(`${this.baseRecipeUrl}/findByIngredients?apiKey=${this.key}&ingredients=${ingredients}number=5`))
    }

    async searchIngredient(ingredient) {
        return (await axios(`${this.baseUrl}food/ingredients/autocomplete?apiKey=${this.key}&query=${ingredient}&number=5`)).data
    }

    // async getRecipeDetails(id, string){
    //     return (await axios(`${this.baseRecipeUrl}/${id}/${string}?apiKey=${this.key}`)).data
    // }
    // this.getOverviewById(id),
    // this.getRecipeDetails(id, 'ingredientWidget.json'),
    // this.getNutritionById(id, 'nutritionWidget.json'),
    // this.getCostById(id, 'priceBreakdownWidget.json'),
    // this.getInstructionsById(id, 'analyzedInstructions')
}

module.exports = FoodAPI;
