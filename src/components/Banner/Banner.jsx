import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import banner from '../../assets/nike-model.jpg';
import './style.css'

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Typography className="title" variant="h2">
                            Everything You Need is <span className="caption">Already Inside</span>
                        </Typography>
                        <Button className="shopping-button">Get Product</Button>
                    </Grid>

                    <Grid className="brand" item sm={6}>
                        <img src={banner} alt="banner" />
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default Banner