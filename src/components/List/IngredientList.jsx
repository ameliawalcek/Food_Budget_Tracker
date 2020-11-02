import React, { useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import DotMenu from '../Items/DotMenu'
import { useLocation } from 'react-router-dom'

const IngredientList = inject('recipeStore', 'userStore')(observer((props) => {
    const { user } = props.userStore
    const { getIngredientInfo } = props.recipeStore
    const location = useLocation()
    let list = user.kitchenList &&
        location.pathname === '/kitchen' ? user.kitchenList : user.shoppingList
    console.log(list)
    
    if (list) {
        console.log(list)
        user.kitchenList && getIngredientInfo(list)
    }

    // const checkUserList = (ingredientId) => {
    //     let menuItems = []
    //     const kitchen = user.kitchenList.includes(ingredientId)
    //     const shopping = user.shoppingList.includes(ingredientId)

    //     kitchen ? menuItems.push({ label: 'Remove from pantry', id: ingredientId }) : menuItems.push({ label: 'Add to pantry', id: ingredientId })
    //     shopping ? menuItems.push({ label: 'Remove from list', id: ingredientId }) : menuItems.push({ label: 'Add to list', id: ingredientId })
    //     return menuItems
    // }

    return (
        <>
            {user.kitchenList
                // &&
                // list.map(ingredient => {
                //     return (
                //         <div className='ingredient' key={ingredient.id}>
                //             <img className='ingredient-img' src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name} />
                //             {/* <DotMenu option={checkUserList(ingredient.id)} /> */}
                //             <br />
                //             <span>
                //                 {unit === 'metric'
                //                     ? Math.round(ingredient.measures[unit]['amount'])
                //                     : ingredient.measures[unit]['amount']
                //                 } {ingredient.measures[unit]['unitShort']} {ingredient.name}
                //             </span>
                //         </div>
                //     )
                // })
            }
        </>
    )
}))

export default IngredientList