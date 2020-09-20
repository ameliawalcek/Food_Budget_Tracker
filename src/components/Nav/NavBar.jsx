import React from 'react'
import { observer, inject } from 'mobx-react'
import { AppBar, Toolbar, IconButton, Typography, Avatar } from '@material-ui/core';
import NavDrawer from './NavDrawer'
import { useStyles } from '../Styles/Nav'

const NavBar = inject('inputStore', 'recipeStore')(observer((props) => {
  const classes = useStyles()

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <NavDrawer />
          <Typography className={classes.title} variant="h6" noWrap>
            Foodie Tracker
          </Typography>
          <div className={classes.grow} />
          <div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}))
export default NavBar