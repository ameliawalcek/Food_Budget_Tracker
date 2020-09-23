import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { observer, inject } from 'mobx-react'

const Search = inject('inputStore', 'recipeStore')(observer((props) => {
    let { ingredientOptions } = props.inputStore

    const handleClick = () => props.recipeStore.getRecipeByIngredients()

    return (
        <div style={{ width: 300 }}>
            <Autocomplete
                id="searchInput"
                size="small"
                multiple
                limitTags={5}
                options={ingredientOptions}
                getOptionLabel={option => option.name}
                onChange={(_, value) => {
                    value = value.map(v => v.name)
                    props.recipeStore.handleTags(value)
                }}
                renderInput={(params) => (
                    <TextField {...params} color='secondary' onChange={props.inputStore.handleInput}
                        label="Search ingredients" margin="normal" />
                )}
            />
            <button onClick={handleClick}>Search</button>
        </div>
    )
}))

export default Search