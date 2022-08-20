import { Box, Button, FormControl, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import React from 'react';
import MailIcon from '@mui/icons-material/Mail';

const GetInTouch = () => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', width: '70%', margin: '10px auto' }}>
            <Typography variant='h3' color='primary' textAlign='center'>Get In Touch</Typography>
            <form >

                <div>
                    <FormControl sx={{ m: 1, width: '52ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-displayName">Full Name</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-displayName"
                            label="First Name"
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl fullWidth sx={{ m: 1, width: '52ch' }}>
                        <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-email"
                            startAdornment={<InputAdornment position="start"><MailIcon /></InputAdornment>}
                            label="Email"
                        />
                    </FormControl>
                    <div>
                        <FormControl fullWidth sx={{ m: 1, width: '52ch' }}>
                            <InputLabel htmlFor="outlined-adornment-query">Comment</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-query"
                                label="query"
                            />
                        </FormControl>
                    </div>
                </div>
                <Button variant="outlined" type='submit'>Submit</Button>
            </form>

        </Box>
    );
};

export default GetInTouch;