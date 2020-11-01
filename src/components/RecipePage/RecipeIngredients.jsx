import React from 'react'
import { observer, inject } from 'mobx-react'
import { Grid, Typography, Switch } from '@material-ui/core'
import DotMenu from '../Items/DotMenu'

const RecipeOverview = inject('recipeStore', 'userStore')(observer((props) => {
    const { recipeOverview, setChecked, checked } = props.recipeStore
    const { user } = props.userStore
    const toggleChecked = () => setChecked()

    const checkUserList = (ingredientId) => {
        let menuItems = []
        const kitchen = user.kitchenList.includes(ingredientId)
        const shopping = user.shoppingList.includes(ingredientId)
        
        kitchen ? menuItems.push({ label: 'Remove from pantry', id: ingredientId }) : menuItems.push({ label: 'Add to pantry', id: ingredientId })
        shopping ? menuItems.push({ label: 'Remove from list', id: ingredientId }) : menuItems.push({ label: 'Add to list', id: ingredientId })
        return menuItems
    }

    let unit = checked ? 'metric' : 'us'

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

            {recipeOverview.extendedIngredients && user.kitchenList &&
                recipeOverview.extendedIngredients.map(ingredient => {
                    return (
                        <div className='ingredient' key={ingredient.id}>
                            <img className='ingredient-img' src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name} />
                            <DotMenu option={checkUserList(ingredient.id)} />
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