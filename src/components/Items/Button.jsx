import React from 'react'
import { Button as UIButton} from '@material-ui/core'
import { Link } from 'react-router-dom'

function Button(props) {

    return (
        <UIButton
            style={{ width: 200, height: 30, marginTop: 15 }}
            button='true'
            component={Link}
            to={props.to}
            variant='contained'
            color='primary'
        >
            {props.text}
        </UIButton>
    )
}

export default Button