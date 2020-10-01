import React, { useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import { useLocation } from 'react-router-dom'
import { useRootStyles } from '../Styles/Root'
import { Paper } from '@material-ui/core'
import Loading from '../Loader/Loading'
import RecipeOverview from './RecipeOverview'
import RecipeNutrition from './RecipeNutrition'
import RecipeIngredients from './RecipeIngredients'
import RecipeCost from './RecipeCost'
import RecipeInstructions from './RecipeInstructions'


const RecipePage = inject('recipeStore')(observer((props) => {
    const classesRoot = useRootStyles()
    const { pathname } = useLocation()
    const { recipeStore } = props
    const { loading } = recipeStore

    useEffect(() => {
        recipeStore.getRecipeById(pathname.split('/')[2])

        return () => recipeStore.cleanRecipeData()
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Paper square className={classesRoot.paperRoot}>
            <Paper square elevation={0}>
                {loading && <Loading />}
                {!loading
                    &&
                    <>
                        <div className='recipe-info'>
                            <RecipeOverview />
                            <RecipeIngredients />
                            <RecipeInstructions />
                        </div>
                        <RecipeCost />
                        <RecipeNutrition />
                    </>
                }
            </Paper>
        </Paper >
    )
}))

export default RecipePage