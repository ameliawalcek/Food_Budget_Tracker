import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { observer, inject } from 'mobx-react'

const Search = inject("inputStore")(observer((props) => {

    let { input, ingredientOptions } = props.inputStore

    return (
        <div style={{ width: 300 }}>
            <Autocomplete
                id="searchInput"
                multiple
                limitTags={2}
                options={ingredientOptions}
                getOptionLabel={(option) => option.title}
                filter={(searchText, key) => true}
                onChange={(_, value) => {
                    props.inputStore.handleInput(value)
                }}
                renderInput={(params) => (
                    <TextField {...params} onChange={props.inputStore.handleInput} label="controlled" margin="normal" />
                )}
            />
        </div>
    )
}))

export default Search