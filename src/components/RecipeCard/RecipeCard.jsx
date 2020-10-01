import React from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import DotMenu from '../Items/DotMenu'
import { Card, CardHeader, CardMedia, CardActions, IconButton } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import { useStyles } from '../Styles/Search'

const RecipeCard = inject('userStore')(observer((props) => {
    let { recipe } = props
    let { user, addItem, deleteItem } = props.userStore
    const classes = useStyles()
    const menuItems = ['Add to plan', 'Remove from plan']

    let isFavorite = user.favoriteRecipes &&
        user.favoriteRecipes.some(f => recipe.id === f)

    const handleFavorite = () => {
        isFavorite
            ? deleteItem(recipe.id, 'favoriteRecipes')
            : addItem(recipe.id, 'favoriteRecipes')
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                className={classes.cardHeader}
                action={
                    <DotMenu option={menuItems} />
                }
                title={recipe.title}
                subheader={`${recipe.likes} likes`}
            />
            <CardMedia
                component={Link}
                to={`recipe/${recipe.id}`}
                className={classes.media}
                image={recipe.image}
                title={recipe.title}
            />
            <CardActions disableSpacing>
                <IconButton
                    aria-label="add to favorites"
                    onClick={handleFavorite}>
                    {
                        isFavorite
                            ? <FavoriteIcon color='primary' />
                            : <FavoriteIcon />
                    }
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}))

export default RecipeCard