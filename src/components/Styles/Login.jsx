import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    rootLanding: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 10,
        width: '90%',
        overflow: 'hidden',
        padding: 10,
    },
    landingBackground: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 20,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%'
    },
}))