import React, { useState } from 'react'
import { observer, inject } from 'mobx-react'

const RecipeNutrition = inject('recipeStore')(observer((props) => {
    const { recipeNutrition } = props.recipeStore

    return (
        <>
            <div>
                <h5>Overview</h5>
                {recipeNutrition.calories} Calories
                {recipeNutrition.carbs} Carbohydrates
                {recipeNutrition.fat} Total Fat
                {recipeNutrition.protein} Protein
            </div>

        </>
    )
}))

export default RecipeNutrition