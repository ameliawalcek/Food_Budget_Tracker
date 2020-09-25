import React from 'react'
import { TextField } from '@material-ui/core'
import { observer, inject } from 'mobx-react'

const Input = inject('inputStore')(observer((props) => {
    const { handleLoginInput } = props.inputStore

    return (
        <TextField
            style={{ width: '100%', marginBottom: 15 }}
            id={props.name}
            name={props.name}
            color='secondary'
            label={props.label}
            type={props.name}
            onChange={handleLoginInput}
            helperText={props.helperText}
            error={props.helperText.length > 0}
        />
    )
}))

export default Input