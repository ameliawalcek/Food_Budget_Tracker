import React, { useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import { useLocation } from 'react-router-dom'
import { useRootStyles } from '../Styles/Root'
import { useStyles } from '../Styles/Recipe'
import { Paper, Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Loading from '../Loader/Loading'
import RecipeOverview from './RecipeOverview'
import RecipeNutrition from './RecipeNutrition'
import RecipeIngredients from './RecipeIngredients'
import RecipeCost from './RecipeCost'
import RecipeInstructions from './RecipeInstructions'


const RecipePage = inject('recipeStore')(observer((props) => {
    const classesRoot = useRootStyles()
    const classes = useStyles()
    const { pathname } = useLocation()
    const { recipeStore } = props
    const { loading } = recipeStore

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
                    <>
                        <div className='recipe-info'>
                            <RecipeOverview />
                            <RecipeIngredients />
                            <RecipeInstructions />
                        </div>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Recipe Nutrition</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <RecipeNutrition />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>Cost Breakdown</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <RecipeCost />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </>
                }
            </Paper>
        </Paper >
    )
}))

export default RecipePage