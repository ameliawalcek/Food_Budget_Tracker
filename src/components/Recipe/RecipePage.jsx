import React, { useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import { useLocation } from 'react-router-dom';
import Loading from '../Loader/Loading'

const RecipePage = inject('inputStore', 'recipeStore')(observer((props) => {
    const { pathname } = useLocation()
    const { recipeStore } = props
    const { recipe, loading } = recipeStore
    console.log(recipe)

    useEffect(() => {
        recipeStore.getRecipeById(pathname.split('/')[2])

        return () => recipeStore.cleanRecipeData()
    }, [])

    return (
        <>
            {loading && <Loading />}
        </>
    )
}))

export default RecipePage