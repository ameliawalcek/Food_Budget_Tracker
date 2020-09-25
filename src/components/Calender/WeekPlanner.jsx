import React from 'react'
import Day from './Day'
import { observer, inject } from 'mobx-react'
import { useRootStyles } from '../Styles/Root'
import { Paper, Grid } from '@material-ui/core'

const WeekPlanner = inject('recipeStore', 'userStore')(observer((props) => {
    const classesRoot = useRootStyles()

    const days = ['Sunday', 'Monday', "Tuesday", 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return (
        <Paper square className={classesRoot.paperRoot}>
            <Paper square elevation={0}>
                <Grid container>
                    {days.map(day => <Day day={day} />)}
                </Grid>
            </Paper >
        </Paper >
    )
}))

export default WeekPlanner