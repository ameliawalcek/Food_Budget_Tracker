import React from 'react'
import { observer, inject } from 'mobx-react'
import { AppBar, Toolbar, IconButton, Typography, Avatar } from '@material-ui/core'
import { useStyles } from '../Styles/Nav'
import NavDrawer from './NavDrawer'

const NavBar = inject('userStore')(observer((props) => {
  const classes = useStyles()
  const { user, isLoggedIn } = props.userStore

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <NavDrawer />
          <Typography className={classes.title} variant='h6' noWrap>
            Foodie Tracker
          </Typography>
          <div className={classes.grow} />
          {isLoggedIn &&
            <div>
              <IconButton
                edge='end'
                aria-label='account of current user'
                aria-haspopup='true'
                color='inherit'
              >
                <Avatar alt={user.firstName} src='/static/images/avatar/1.jpg' />
              </IconButton>
            </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}))
export default NavBar