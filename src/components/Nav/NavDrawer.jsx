import React, { useState } from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import {
    IconButton, Switch, ListItem, ListItemText, Drawer, List, ListItemIcon
} from '@material-ui/core'
import Brightness2RoundedIcon from '@material-ui/icons/Brightness2Rounded'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import ExploreIcon from '@material-ui/icons/Explore'
import HomeIcon from '@material-ui/icons/Home'
import MenuIcon from '@material-ui/icons/Menu'
import { useStyles } from '../Styles/Nav'

const NavDrawer = inject('inputStore', 'recipeStore', 'userStore')(observer((props) => {
    const { darkState, handleDarkStateChange } = props.userStore

    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleDrawerOpen = () => setOpen(true)
    const handleDrawerClose = () => setOpen(false)

    const icons = [
        { icon: <HomeIcon />, link: '/dashboard', title: `Dashboard` },
        { icon: <ExploreIcon />, link: '/explore', title: `Explore` },
        { icon: <NotificationsIcon />, link: '/notifications', title: `Notifications` }
    ]

    return (
        <>
            <IconButton
                edge="start"
                className={classes.menuButton}
                onClick={handleDrawerOpen}
                color="inherit"
                aria-label="open drawer"
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                className={classes.drawerHeader}
                variant='temporary'
                onBackdropClick={handleDrawerClose}
                anchor='left'
                open={open}
                classes={{
                    paper: classes.drawerPaperHeader,
                }}
            >
                <List className={classes.listHightHeader}>
                    {icons.map(i => {
                        return (
                            <ListItem button component={Link} to={i.link} key={Math.random()}>
                                <ListItemIcon>
                                    {i.icon}
                                </ListItemIcon>
                                <ListItemText primary={i.title} />
                            </ListItem>
                        )
                    })}
                    <ListItem>
                        <ListItemIcon>
                            {darkState
                                ? <Brightness2RoundedIcon fontSize='small' />
                                : <Brightness4Icon />
                            }
                        </ListItemIcon>
                        <ListItemIcon>
                            <Switch
                                checked={darkState}
                                onChange={handleDarkStateChange}
                            />
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}))
export default NavDrawer