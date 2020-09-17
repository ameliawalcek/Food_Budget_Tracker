const express = require("express");
const recipeRouter = express.Router();
const dataSources = require("../dataSources/DataSources");

recipeRouter.post('/ingredients', async (req, res) => {
    let { ingredients } = req.body
    ingredients = ingredients.map(ingredient => `+${ingredient},`)

    const response = await dataSources.foodAPI.getRecipeByIngredients(ingredients)
    response.send(response)
})

recipeRouter.get('/ingredient/search', async (req, res) => {
    const { input } = req.query
    const response = await dataSources.foodAPI.searchIngredient(input)
    res.send(response)
})

module.exports = recipeRouter;
