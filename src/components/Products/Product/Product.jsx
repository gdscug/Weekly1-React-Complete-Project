import React from 'react';
import { Card, CardMedia, CardActions, CardContent, Typography, IconButton } 
from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './style';

const Product = ({ product }) => {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardMedia className={classes.media} 
                image={product.image} 
                title={product.name}/>
            <CardContent className={classes.cardContent}>
                <Typography 
                    className={classes.typography} 
                    variant="subtitle1">{product.name}</Typography>
                <Typography 
                    className={classes.typography} 
                    variant="subtitle1" 
                    color="textSecondary">{product.description}</Typography>
                <Typography 
                    className={classes.typography} 
                    variant="body1">{product.price}</Typography>
            </CardContent>

            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
