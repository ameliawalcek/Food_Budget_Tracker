import React from 'react'
import { observer, inject } from 'mobx-react'
import CostPie from '../Graphs/CostPie'
import CostTable from '../Graphs/CostTable'

const RecipeCost = inject('recipeStore', 'userStore')(observer((props) => {
    const { recipeCost, getDollars } = props.recipeStore

    return (
        <>
            <div>
                {getDollars(recipeCost.totalCost)}
                {getDollars(recipeCost.totalCostPerServing)} per serving
            </div>
            <CostPie />
            <CostTable/>
        </>
    )
}))

export default RecipeCost