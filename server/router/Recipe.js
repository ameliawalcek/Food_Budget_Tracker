const express = require("express");
const recipeRouter = express.Router();
const dataSources = require("../dataSources/DataSources");
const CircularJSON = require('circular-json')

recipeRouter.get('/:id', async (req, res) => {
    let { id } = req.params
    let response = await dataSources.foodAPI.getRecipeById(id)
    res.send(response)
})

recipeRouter.post('/ingredients', async (req, res) => {
    let { ingredientList } = req.body
    let ingredients = ingredientList.map(ingredient => `+${ingredient},`)

    let response = await dataSources.foodAPI.getRecipeByIngredients(ingredients)
    res.send(CircularJSON.stringify(response.data))
})

recipeRouter.get('/ingredient/search', async (req, res) => {
    const { input } = req.query
    res.send(await dataSources.foodAPI.searchIngredient(input))
})

recipeRouter.post('/bulkRecipes', async (req, res) => {
    let { ids } = req.body
    ids = ids.toString()
    let response = await dataSources.foodAPI.getRecipesByBulk(ids)
    res.send(CircularJSON.stringify(response.data))
})
module.exports = recipeRouter;
