import React from 'react'
import { observer, inject } from 'mobx-react'
import RecipeCard from './RecipeCard'
import { Grid } from '@material-ui/core'

const RecipeCards = inject('recipeStore')(observer((props) => {

    return (
        <>
            {props.recipes.map(result => {
                return (
                    <Grid
                        container
                        item
                        direction="row"
                        justify="center"
                        alignItems="center"
                        key={Math.random()} 
                        xs={12} sm={4} md={3} lg={3}
                    >
                        <RecipeCard recipe={result}/>
                    </Grid>
                )
            })}
        </>
    )
}))

export default RecipeCards