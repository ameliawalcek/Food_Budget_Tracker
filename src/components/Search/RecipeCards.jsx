import React from 'react'
import { observer, inject } from 'mobx-react'
import RecipeCard from './RecipeCard'
import { Grid } from '@material-ui/core'

const RecipeCards = inject('recipeStore')(observer((props) => {
    let { recipeResults } = props.recipeStore

    return (
        <>
            {recipeResults.map(result => {
                return (
                    <Grid item xs={12} sm={4} md={3} lg={3}>
                        <RecipeCard recipe={result} key={result.id} />
                    </Grid>
                )
            })}
        </>
    )
}))

export default RecipeCards