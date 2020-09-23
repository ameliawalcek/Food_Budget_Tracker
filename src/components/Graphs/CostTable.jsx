import React from 'react'
import { observer, inject } from 'mobx-react'
import {TableBody, Table, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core'

const CostTable = inject('recipeStore', 'userStore')(observer((props) => {
    const { recipeCost, getDollars, checked } = props.recipeStore
    let unit = checked ? 'metric' : 'us'

    return (
        <TableContainer component={Paper} style={{ width: 400 }}>
            <Table aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell>Ingredient</TableCell>
                        <TableCell align="right">Qty.</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {recipeCost.ingredients.map((ingredient) => (
                        <TableRow key={ingredient.name}>
                            <TableCell>{ingredient.name}</TableCell>
                            <TableCell align="right">
                                {ingredient.amount[unit]['value']} {
                                    ingredient.amount[unit]['unit'].length
                                        ? ingredient.amount[unit]['unit']
                                        : 'unit(s)'
                                }
                            </TableCell>
                            <TableCell align="right">{getDollars(ingredient.price)}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={0}>Total per serving</TableCell>
                        <TableCell align="right">{getDollars(recipeCost.totalCost)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}))
export default CostTable