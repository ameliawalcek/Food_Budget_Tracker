import React from 'react'
import RecipeCard from '../Search/RecipeCard'
import { observer, inject } from 'mobx-react'
import { Grid, Typography } from '@material-ui/core'

const WeekPlanner = inject('recipeStore', 'userStore')(observer((props) => {
    let { recipeResults } = props.recipeStore

    return (
        <>
            <Grid container xs={12} sm={6} md={3} lg={3}
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Typography
                        variant="h5"
                        color="primary"
                    >
                        {props.day}
                    </Typography>
                </Grid>
                <Grid container item
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <RecipeCard recipe={recipeResults[0]} key={recipeResults[0].id} />
                </Grid>
            </Grid>
        </>
    )
}))

export default WeekPlanner