import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import { Box, MenuItem, Stack, Typography } from '@mui/material';
const Footer = () => {
    return (
        <Box sx={{
            padding: '20px',
            bgcolor: '#282c4c',
            color: '#c1ba5c',
            display: 'flex',
            alignItems: 'center'
            // "&:hover": { background: 'black' }
        }}>
            <CodeIcon sx={{ mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                sx={{
                    mr: 2,

                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Developed By &nbsp;<a style={{ color: '#bc9a9a', textDecoration: 'none' }} href="https://uday-hasan-portfolio.web.app/" target={'_blank'} rel='noreferrer'>Uday Hasan</a>
            </Typography>
            {/* <Stack sx={{ display: 'inline-block' }}><CodeIcon /> Developed By &nbsp;<a style={{ color: '#bc9a9a', textDecoration: 'none' }} href="https://uday-hasan-portfolio.web.app/" target={'_blank'} rel='noreferrer'>Uday Hasan</a></Stack> */}
        </Box>
    );
};

export default Footer;