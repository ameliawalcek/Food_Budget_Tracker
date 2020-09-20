import {  makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        // height: '8vh'
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));
