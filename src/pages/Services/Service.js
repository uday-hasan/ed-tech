import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, MenuItem, Typography } from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom'
const Service = ({ course }) => {
    const { name, price, description, picture, _id } = course;
    const navigate = useNavigate();
    const buyNow = (id) => {
        navigate('/services/' + id)
    }
    return (

        <Card >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={picture}
                    alt=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography>{price}</Typography>

                <Button size="small" color="primary" onClick={() => buyNow(_id)}  >
                    <MenuItem>
                        <ShoppingCartIcon /> Buy Now
                    </MenuItem>
                </Button>
            </CardActions>
        </Card>

    );
};

export default Service;