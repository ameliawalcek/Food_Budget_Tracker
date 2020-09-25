import React from 'react'
import { observer, inject } from 'mobx-react'

const RecipeOverview = inject('recipeStore')(observer((props) => {
    const { recipeOverview } = props.recipeStore

    return (
        <>
            {recipeOverview.title}
            <img src={recipeOverview.image} alt={recipeOverview.title} />
            {recipeOverview.readyInMinutes} min
            preparation: {recipeOverview.preparationMinutes} min
            cook time: {recipeOverview.cookingMinutes}
            {recipeOverview.Servings} servings
            {recipeOverview.aggregateLikes} likes
            {recipeOverview.dishTypes &&
                recipeOverview.dishTypes.map(type => <div key={type}>{type}</div>)
            }
        </>
    )
}))

export default RecipeOverview