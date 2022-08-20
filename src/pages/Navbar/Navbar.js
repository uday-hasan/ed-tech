import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Logout from '@mui/icons-material/Logout';
import { Stack } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

export default function AccountMenu() {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <React.Fragment>
            <Stack p={'10px'} direction={'row'} alignItems={'center'} justifyContent={'space-around'} sx={{ textAlign: 'center', width: '100%', bgcolor: 'white', color: 'blue', position: 'sticky', top: 0, zIndex: 1, }} >
                {/* Brand Name */}
                <Stack component={'h1'} sx={{ fontFamily: 'Source Serif Pro, serif' }} color='blue'>
                    Ed-Tech
                </Stack>
                {/* Navigate Item */}
                <Stack direction={'row'} >
                    <Typography color='blue' sx={{
                        padding: '10px',
                        minWidth: 100,
                        '&:hover': {
                            bgcolor: ''
                        }
                    }}><Link to={'/'}>Home</Link></Typography>
                    <Typography color='blue' sx={{
                        padding: '10px',
                        minWidth: 100,
                        '&:hover': {
                            bgcolor: ''
                        }
                    }}><Link to='/services'>Services</Link></Typography>
                </Stack>
                <Box>

                    {user ?
                        <Stack direction={'row'} title="Account settings">
                            <MenuItem>
                                <Avatar />{user?.displayName}
                            </MenuItem>

                            <MenuItem onClick={logout}>
                                <ListItemIcon >
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Stack>
                        :
                        <Link to='/login'>
                            <MenuItem>
                                <LoginIcon sx={{ marginRight: '2px' }} />  Login
                            </MenuItem></Link>}
                </Box>
            </Stack>
        </React.Fragment>
    );
}
