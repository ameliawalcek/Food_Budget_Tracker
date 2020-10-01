import React from 'react'
import { observer, inject } from 'mobx-react'
import { Paper, Grid, GridList } from '@material-ui/core'
import SearchIngredient from './SearchIngredient'
import EmptyCard from './EmptyCard'
import RecipeCards from '../RecipeCard/RecipeCards'
import Loading from '../Loader/Loading'
import { useRootStyles } from '../Styles/Root'
import { useStyles } from '../Styles/Search'

const SearchPage = inject('recipeStore')(observer((props) => {
    let { recipeResults, loading } = props.recipeStore
    const classesRoot = useRootStyles()
    const classes = useStyles()

    return (
        <Paper square className={classesRoot.paperRoot}>
            <Paper square elevation={0}>
                <SearchIngredient />
                {loading && <Loading />}
                <Grid container>
                    <GridList cellHeight={180} className={classes.rootMedia}>
                        {recipeResults.length && !loading
                            ? <RecipeCards recipes={recipeResults} />
                            : <EmptyCard />
                        }
                    </GridList>
                </Grid>
            </Paper>
        </Paper>
    )
}))

export default SearchPage