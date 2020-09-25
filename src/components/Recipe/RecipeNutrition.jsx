import React from 'react'
import { observer, inject } from 'mobx-react'
import NutritionBar from '../Graphs/NutritionBar'

const RecipeNutrition = inject('recipeStore')(observer((props) => {
    const { recipeOverview, loading } = props.recipeStore

    return (
       
        <>
            {
                recipeOverview.nutrition &&
                <>
                <div>
                    {recipeOverview.nutrition.nutrients[0].amount} Calories
                    {recipeOverview.nutrition.caloricBreakdown.percentCarbs}% Carbohydrates
                    {recipeOverview.nutrition.caloricBreakdown.percentFat}% Fat
                    {recipeOverview.nutrition.caloricBreakdown.percentProtein}% Protein
                </div>
                
                </>
            }
            {recipeOverview.nutrition && <NutritionBar />}
        </>
    )
}))

export default RecipeNutrition