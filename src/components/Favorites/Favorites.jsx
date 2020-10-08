import React from 'react'
import { observer, inject } from 'mobx-react'
import RecipeCards from '../RecipeCard/RecipeCards'
import { Paper } from '@material-ui/core'
import { useRootStyles } from '../Styles/Root'

const Favorites = inject('userStore', 'recipeStore')(observer((props) => {
    const classesRoot = useRootStyles()
    const { user } = props.userStore
    const { getRecipeBulk } = props.recipeStore

    let favorites = user.favoriteRecipes && getRecipeBulk(user.favoriteRecipes)

    return (
        <>
            {/* {
                favorites &&
                <Paper square className={classesRoot.paperRoot}>
                    <Paper square elevation={0}>
                        <RecipeCards recipes={user.favoriteRecipes} />
                    </Paper>
                </Paper>
            } */}
        </>
    )
}))

export default Favorites