import React from 'react'
import { observer, inject } from 'mobx-react'
import { Grid, Typography, Switch } from '@material-ui/core'
import DotMenu from '../Items/DotMenu'

const RecipeOverview = inject('recipeStore')(observer((props) => {
    const { recipeOverview, setChecked, checked } = props.recipeStore

    const toggleChecked = () => setChecked()

    let unit = checked ? 'metric' : 'us'

    //need to make this dynamic
    const menuItems = ['Add to list', 'Remove from list', 'Add to kitchen', 'Remove from kitchen']

    return (
        <>
            <Typography component="div" style={{ width: 125 }}>
                <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item>US</Grid>
                    <Grid item>
                        <Switch size="small" checked={checked} onChange={toggleChecked} />
                    </Grid>
                    <Grid item>Metric</Grid>
                </Grid>
            </Typography>

            {recipeOverview.extendedIngredients &&
                recipeOverview.extendedIngredients.map(ingredient => {
                    return (
                        <div className='ingredient' key={ingredient.id}>
                            <img className='ingredient-img' src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name} />
                            <DotMenu option={menuItems} />
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