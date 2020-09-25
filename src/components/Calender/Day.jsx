import React from 'react'
import RecipeCard from '../Search/RecipeCard'
import { observer, inject } from 'mobx-react'
import { useRootStyles } from '../Styles/Root'
import Grid from '@material-ui/core/Grid'

const WeekPlanner = inject('recipeStore', 'userStore')(observer((props) => {
    const classesRoot = useRootStyles()
    let { recipeResults } = props.recipeStore

    return (
        <>
            <Grid item xs={12} sm={6} md={3} lg={3}>
                {props.day}
                <RecipeCard recipe={recipeResults[0]} key={recipeResults[0].id} />
            </Grid>
        </>
    )
}))

export default WeekPlanner