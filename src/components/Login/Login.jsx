import React from 'react'
import { observer, inject } from 'mobx-react'
import { useLocation } from 'react-router-dom'
import { useRootStyles } from '../Styles/Root'
import { Paper, Grid, Typography, Button as UIButton } from '@material-ui/core'
import Input from '../Items/Input'
import Button from '../Items/Button'
import { useStyles } from '../Styles/Login'

const Login = inject('recipeStore')(observer((props) => {
    const classesRoot = useRootStyles()
    const classes = useStyles()

    const { pathname } = useLocation()
    const page = pathname.split('/')[2]
    const header = (page === 'login' ? 'LOGIN' : 'SIGN UP')

    const handleClick = async () => {

    }

    return (
        <Paper square className={classesRoot.paperRoot}>
            <Paper square elevation={0}>
                <Grid
                    container
                    justify='center'
                    alignItems='center'
                    direction='column'
                    className={classes.landingBackground}
                >
                    <Grid item>
                        <Typography
                            variant='h5'
                            style={{ marginTop: 30 }}
                        >
                            {header}
                        </Typography>
                    </Grid>
                    <form className={classes.rootLanding} noValidate autoComplete='off'>
                        <Grid item>
                            {page !== 'login' &&
                                <>
                                    <Input name={'firstName'} label={'First Name'} helperText={''} />
                                    <Input name={'lastName'} label={'Last Name'} helperText={''} />
                                </>
                            }
                            <Input name={'email'} label={'Email'} helperText={''} />
                            <Input name={'password'} label={'Password'} helperText={''} />
                        </Grid>
                        <Grid item width={200}>
                            <UIButton
                                style={{ width: 200, height: 30, marginTop: 30 }}
                                variant='contained'
                                onClick={handleClick}
                                color='primary'
                            >
                                ENTER
                            </UIButton>
                        </Grid>
                        <Grid item>
                            {page === 'login'
                                ? <Button text={'SIGN UP'} to={'/auth/register'} />
                                : <Button text={'LOGIN'} to={'/auth/login'} />
                            }
                        </Grid>
                    </form>
                </Grid>
            </Paper>
        </Paper >
    )
}))

export default Login