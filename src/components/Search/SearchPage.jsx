import React from 'react'
import { observer, inject } from 'mobx-react'
import { Paper } from '@material-ui/core'
import SearchIngredient from './SearchIngredient'
import EmptyCard from './EmptyCard'
import Results from './Results'
import Loading from '../Loader/Loading'
import { useRootStyles } from '../Styles/Root'

const SearchPage = inject('inputStore', 'recipeStore')(observer((props) => {
    let { recipeResults, loading } = props.recipeStore
    const classesRoot = useRootStyles()

    return (
        <Paper square className={classesRoot.paperRoot}>
            <SearchIngredient />
            {loading && <Loading />}
            {recipeResults.length && !loading
                ? <Results />
                : <EmptyCard />
            }
        </Paper>
    )
}))

export default SearchPage