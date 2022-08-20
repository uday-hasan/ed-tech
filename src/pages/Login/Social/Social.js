import { Button, MenuItem } from '@mui/material';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import GoogleIcon from '@mui/icons-material/Google';
import Loader from '../../Loader/Loader'

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const googleSignIn = async () => {
        await signInWithGoogle()
    }
    if (loading) {
        return <Loader />
    }
    return (
        <div>
            <Button variant='contained' onClick={googleSignIn}>
                <MenuItem>
                    <GoogleIcon /> Google
                </MenuItem>
            </Button>
        </div>
    );
};

export default Social;