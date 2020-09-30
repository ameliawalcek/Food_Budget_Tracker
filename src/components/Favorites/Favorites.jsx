import React from 'react'
import { observer, inject } from 'mobx-react'
import RecipeCards from '../Search/RecipeCards'
import { Paper } from '@material-ui/core'
import { useRootStyles } from '../Styles/Root'

const Favorites = inject('inputStore', 'recipeStore')(observer((props) => {
    const classesRoot = useRootStyles()

    return (
        <Paper square className={classesRoot.paperRoot}>
            <Paper square elevation={0}>
                <RecipeCards />
            </Paper>
        </Paper>
    )
}))

export default Favorites