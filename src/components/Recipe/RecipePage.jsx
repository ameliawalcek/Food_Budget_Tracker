import React, { useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import { useLocation } from 'react-router-dom';
import Loading from '../Loader/Loading'
import { useRootStyles } from '../Styles/Root'
import { Paper } from '@material-ui/core'
import RecipeOverview from './RecipeOverview'
import RecipeNutrition from './RecipeNutrition'
import RecipeIngredients from './RecipeIngredients'
import RecipeCost from './RecipeCost';

const RecipePage = inject('recipeStore')(observer((props) => {
    const { pathname } = useLocation()
    const { recipeStore } = props
    const { loading } = recipeStore
    const classesRoot = useRootStyles()

    useEffect(() => {
        recipeStore.getRecipeById(pathname.split('/')[2])

        return () => recipeStore.cleanRecipeData()
    }, [])

    return (

        <Paper square className={classesRoot.paperRoot}>
            <Paper square elevation={0}>
                {loading && <Loading />}
                {!loading
                    &&
                    <div className='recipe-info'>
                        <RecipeOverview />
                        <RecipeIngredients />
                        <RecipeNutrition />
                        <RecipeCost />
                    </div>
                }
            </Paper>
        </Paper >

    )
}))

export default RecipePage