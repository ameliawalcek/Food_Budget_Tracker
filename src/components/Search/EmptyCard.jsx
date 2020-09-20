import React from 'react'
import { observer, inject } from 'mobx-react'

const EmptyCard = inject('inputStore', 'recipeStore')(observer((props) => {

    return (
        <>
            EmptyCard
        </>
    )
}))

export default EmptyCard