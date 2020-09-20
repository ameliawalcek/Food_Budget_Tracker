import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    loader: {
        left: '50%',
        top: '50%',
        marginLeft: -75,
        marginTop: -75,
        position: 'absolute'
    }
}))