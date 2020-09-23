import React, { useState } from 'react'
import { observer, inject } from 'mobx-react'
import { Grid, Typography, Switch } from '@material-ui/core'

const RecipeOverview = inject('recipeStore')(observer((props) => {
    const { recipeOverview } = props.recipeStore

    const [checked, setChecked] = useState(false)
    const toggleChecked = () => setChecked((prev) => !prev)

    let unit = checked ? 'metric' : 'us'

    return (
        <>
            <Typography component="div">
                <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item>US</Grid>
                    <Grid item>
                        <Switch size="small" checked={checked} onChange={toggleChecked} />                    </Grid>
                    <Grid item>Metric</Grid>
                </Grid>
            </Typography>
            {recipeOverview.extendedIngredients &&
                recipeOverview.extendedIngredients.map(ingredient => {
                    return (
                        <div className='ingredient' key={ingredient.id}>
                            <img className='ingredient-img' src={ingredient.image} alt='no image' />
                            <br />
                            <span>
                                {unit === 'metric'
                                    ? Math.round(ingredient.measures[unit]['amount'])
                                    : ingredient.measures[unit]['amount']
                                } {ingredient.measures[unit]['unitShort']} {ingredient.name}
                            </span>
                        </div>
                    )
                })
            }
        </>
    )
}))

export default RecipeOverview