import React from 'react'
import { observer, inject } from 'mobx-react'
import Result from './RecipeCard'

const RecipeCards = inject('inputStore', 'recipeStore')(observer((props) => {
    let { recipeResults } = props.recipeStore

    return (
        <>
            {recipeResults.map(result => <Result recipe={result} key={result.id} />)}
        </>
    )
}))

export default RecipeCards