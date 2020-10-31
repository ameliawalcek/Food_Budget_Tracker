import React, { useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import RecipeCards from '../RecipeCard/RecipeCards'
import { Paper } from '@material-ui/core'
import { useRootStyles } from '../Styles/Root'

const Favorites = inject('userStore', 'recipeStore')(observer((props) => {
    const classesRoot = useRootStyles()
    const { user } = props.userStore
    const { getRecipeBulk, pageInfo } = props.recipeStore

    useEffect(() => {
        user.favoriteRecipes && getRecipeBulk(user.favoriteRecipes)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Paper square className={classesRoot.paperRoot}>
                <Paper square elevation={0}>
                    {pageInfo.length &&
                        <RecipeCards recipes={pageInfo} />
                    }
                </Paper>
            </Paper>

        </>
    )
}))

export default Favorites