import React from 'react';
import { Banner } from './Banner/Banner';
import Services from '../Services/Services'
import Tutor from './Tutor/Tutor'
import { Typography } from '@mui/material';
import GetInTouch from './GetTouch/GetTouch';

const Home = () => {
    const style = {
        width: '70%',
        margin: 'auto'
    }
    return (
        <div style={style}>
            <Banner />
            <Typography variant={'h3'} color='primary' textAlign={'center'}>Services</Typography>
            <Services />
            <Typography variant={'h3'} color='primary' textAlign={'center'}>Tutor</Typography>
            <Tutor />
            <GetInTouch />
        </div>
    );
};

export default Home;