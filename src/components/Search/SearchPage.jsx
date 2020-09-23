import React from 'react'
import { observer, inject } from 'mobx-react'
import { Paper, Box } from '@material-ui/core'
import SearchIngredient from './SearchIngredient'
import EmptyCard from './EmptyCard'
import Results from './RecipeCards'
import Loading from '../Loader/Loading'
import { useRootStyles } from '../Styles/Root'

const SearchPage = inject('inputStore', 'recipeStore')(observer((props) => {
    let { recipeResults, loading } = props.recipeStore
    const classesRoot = useRootStyles()

    return (
        <Paper square className={classesRoot.paperRoot}>
            <Paper square elevation={0}>
                <SearchIngredient />
                {loading && <Loading />}
                {recipeResults.length && !loading
                    ? <Results />
                    : <EmptyCard />
                }
            </Paper>
        </Paper>
    )
}))

export default SearchPage