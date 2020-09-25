import React from 'react'
import { observer, inject } from 'mobx-react'

const RecipeInstructions = inject('recipeStore')(observer((props) => {
    const { recipeInstructions } = props.recipeStore

    return (
        <>
            {recipeInstructions[0] &&
                recipeInstructions[0].steps.map(s => {
                    return (
                        <div key={s.number}>
                            {s.number}. {s.step}
                        </div>
                    )
                })
            }
        </>
    )
}))

export default RecipeInstructions