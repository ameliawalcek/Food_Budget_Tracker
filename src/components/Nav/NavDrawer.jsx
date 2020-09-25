import React, { useState } from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import {
    IconButton, Switch, ListItem, ListItemText, Drawer, List, ListItemIcon, Avatar, Divider
} from '@material-ui/core'
import Brightness2RoundedIcon from '@material-ui/icons/Brightness2Rounded'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import ExploreIcon from '@material-ui/icons/Explore'
import HomeIcon from '@material-ui/icons/Home'
import MenuIcon from '@material-ui/icons/Menu'
import { useStyles } from '../Styles/Nav'
import SearchIcon from '@material-ui/icons/Search';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import KitchenIcon from '@material-ui/icons/Kitchen';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import EventIcon from '@material-ui/icons/Event';

const NavDrawer = inject('inputStore', 'recipeStore', 'userStore')(observer((props) => {
    const { darkState, handleDarkStateChange } = props.userStore

    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleDrawerOpen = () => setOpen(true)
    const handleDrawerClose = () => setOpen(false)

    const icons = [
        { icon: <SearchIcon />, link: '/', title: `Search` },
        { icon: <EventIcon />, link: '/weekplan', title: `Meal Plan` },
        { icon: <FormatListBulletedIcon />, link: '/list', title: `Shopping List` },
        { icon: <FavoriteBorderIcon />, link: '/favorites', title: `Favorites` },
        { icon: <KitchenIcon />, link: '/kitchen', title: `My Kitchen` },
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
                <List>
                    <ListItem
                        button
                        component={Link}
                        to={`/profile`}
                        style={{ height: 60 }}
                    >
                        <ListItemIcon>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemIcon>
                        <ListItemText primary='My Profile' />
                    </ListItem>
                </List>
                <Divider />
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