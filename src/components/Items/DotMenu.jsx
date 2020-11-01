import React, { useState } from 'react'
import { observer, inject } from 'mobx-react'
import { Menu, MenuItem, IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const DotMenu = inject('userStore')(observer((props) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const { addItem, deleteItem } = props.userStore

    const handleSelect = (id, string) => {
        switch (string) {
            case 'Add to pantry':
                addItem(id, 'kitchenList')
                break
            case 'Remove from pantry':
                deleteItem(id, 'kitchenList')
                break
            case 'Add to list':
                addItem(id, 'shoppingList')
                break
            case 'Remove from list':
                deleteItem(id, 'shoppingList')
                break
            default:
                break
        }
    }

    const handleClick = (event) => setAnchorEl(event.currentTarget)

    const handleClose = (event) => {
        setAnchorEl(null)
        const { value, textContent } = event.target
        handleSelect(value, textContent)
    }

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
                {props.option.map(o => <MenuItem key={Math.random()} value={o.id} onClick={handleClose}>{o.label}</MenuItem>)}
            </Menu>
        </>
    )
}))

export default DotMenu