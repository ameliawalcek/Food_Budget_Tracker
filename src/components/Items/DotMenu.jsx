import React, { useState } from 'react'
import { observer, inject } from 'mobx-react'
import { Menu, MenuItem, IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const DotMenu = inject('inputStore')(observer((props) => {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => setAnchorEl(event.currentTarget)

    const handleClose = () => setAnchorEl(null)

    return (
        <>
            <IconButton
                aria-label="more"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {props.option.map(o => <MenuItem key={o} onClick={handleClose}>{o}</MenuItem>)}
            </Menu>
        </>
    )
}))

export default DotMenu