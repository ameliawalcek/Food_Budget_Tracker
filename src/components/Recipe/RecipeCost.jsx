import React, { useState } from 'react'
import { observer, inject } from 'mobx-react'

const RecipeCost = inject('recipeStore')(observer((props) => {
    const { recipeCost } = props.recipeStore

    const getDollars = cents => {
        let dollars = cents / 100
        return dollars.toLocaleString('en-US', {style:"currency", currency:"USD"})
    }

    return (
        <>
            <div>
                {getDollars(recipeCost.totalCost)}
                {getDollars(recipeCost.totalCostPerServing)} per serving
            </div>

        </>
    )
}))

export default RecipeCost