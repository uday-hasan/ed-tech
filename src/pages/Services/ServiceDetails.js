import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom'
const ServiceDetails = () => {
    const { id } = useParams()
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('/courses.json').then(res => res.json()).then(data => setCourses(data))
    }, [id])
    const course = courses.find(c => c._id === id)
    console.log(id);
    return (
        <Card sx={{ maxWidth: 345, m: '20px auto', width: '50%', minHeight: '100vh' }}>
            <CardMedia
                component="img"
                height="140"
                image={course?.picture}
                alt=""
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {course?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {course?.desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Typography component={'h3'} variant='success' color={'success'} >Successfully Enrolled</Typography>
            </CardActions>
        </Card>
    );
};

export default ServiceDetails;