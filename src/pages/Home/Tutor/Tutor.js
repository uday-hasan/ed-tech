import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import './Tutor.css'

export default function MultiActionAreaCard() {
    return (
        <div className='tutor-container'
        >

            <Card sx={{
                maxWidth: 345,
                position: 'relative',
                "&:hover": {
                    '.hh': {
                        display: 'block'
                    }
                }
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image="https://hellloexpert.com/tf/html/endus/assets/images/team/img-3.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Josette Wadsworth
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography className='hh' sx={{ display: 'none' }} size="small" color="primary">
                        Contact
                    </Typography>
                </CardActions>
            </Card>
            <Card sx={{
                maxWidth: 345,
                position: 'relative',
                "&:hover": {
                    '.hh': {
                        display: 'block'
                    }
                }
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image="https://hellloexpert.com/tf/html/endus/assets/images/team/img-2.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Stephen Robert
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography sx={{ display: 'none' }} className='hh' size="small" color="primary">
                        Contact
                    </Typography>
                </CardActions>
            </Card>
            <Card sx={{
                maxWidth: 345,
                position: 'relative',
                "&:hover": {
                    '.hh': {
                        display: 'block'
                    }
                }
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image="https://hellloexpert.com/tf/html/endus/assets/images/team/img-1.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            George Alex
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography sx={{ display: 'none' }} className='hh' size="small" color="primary">
                        Contact
                    </Typography>
                </CardActions>
            </Card>
        </div>
    );
}
