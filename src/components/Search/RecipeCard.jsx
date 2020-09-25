import React from 'react'
import { Link } from 'react-router-dom'
import DotMenu from '../Items/DotMenu'
import { Card, CardHeader, CardMedia, CardActions, IconButton } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import { useStyles } from '../Styles/Search'

function RecipeCard(props) {
    let { recipe } = props
    const classes = useStyles()
    const menuItems = ['Add to plan', 'Remove from plan']

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
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default RecipeCard