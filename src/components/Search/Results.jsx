import React from 'react'
import { observer, inject } from 'mobx-react'
import Result from './Result'

const Results = inject('inputStore', 'recipeStore')(observer((props) => {
    let { recipeResults } = props.recipeStore

    return (
        <>
            {recipeResults.map(result => <Result recipe={result} key={result.id} />)}
        </>
    )
}))

export default Results