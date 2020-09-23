import React from 'react'
import { Link } from 'react-router-dom'

function RecipeCard(props) {
    let { recipe } = props
    
    return (
        <div>
            <Link to={`recipe/${recipe.id}`} ><img src={recipe.image} alt={recipe.title} /></Link>
            <div>{recipe.title}</div>
        </div>
    )
}

export default RecipeCard