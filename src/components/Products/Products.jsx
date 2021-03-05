import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './style';

const products = [
    {   id: 1, 
        name: 'Air Zoom Tempo Next Flyease', 
        description: 'Basketball Shoe', 
        price: 'Rp. 2.000.000',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b3d843c9-3b00-4d52-ac78-b83913fda1c4/jordan-ma2-shoe-qw1Z6m.jpg'
    },
    {   id: 2, 
        name: 'Air Zoom Tempo Next Flyease', 
        description: 'Basketball Shoe', 
        price: 'Rp. 2.000.000',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b3d843c9-3b00-4d52-ac78-b83913fda1c4/jordan-ma2-shoe-qw1Z6m.jpg'
    }
]

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
                <Typography variant="h4">Our Products</Typography>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
