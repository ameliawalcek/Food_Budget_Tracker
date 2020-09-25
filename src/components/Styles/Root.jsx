import { makeStyles } from '@material-ui/core'

export const useRootStyles = makeStyles((theme) => ({
    paperRoot: {
        height: '92vh',
        paddingTop: '8vh',
    },
    paperRootTwo:{
        height: '100%'
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}))