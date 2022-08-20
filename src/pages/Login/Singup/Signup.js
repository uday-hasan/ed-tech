import MailIcon from '@mui/icons-material/Mail';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Alert, Button, Divider, Typography } from '@mui/material';
import auth from '../../../firebase.init';
import { createUserWithEmailAndPassword } from "firebase/auth";
import Snackbar from '@mui/material/Snackbar';
import Loader from '../../Loader/Loader'
import { useNavigate } from "react-router-dom";
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import Social from '../Social/Social'

export default function InputAdornments() {
    const navigate = useNavigate()
    const [values, setValues] = React.useState({
        displayName: '',
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    //*****  Snackbar Message
    const [msg, setMsg] = React.useState('')
    const [state, setState] = React.useState({
        open: false,
        success: false,
        vertical: 'top',
        horizontal: 'right',
        msg: msg,
    })
    const [loader, setLoader] = React.useState(false);
    const { vertical, horizontal, open, success } = state;

    const successAlert = () => {
        setState({ ...state, open: true, success: true });
    }
    const unsuccessAlert = (error) => {
        setState({ ...state, open: true, success: false });
        if (error.code === 'auth/email-already-in-use')
            setMsg('This account already exist')
    }
    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [updateProfile, updating] = useUpdateProfile(auth);
    // ***** Form Submit
    const handleSubmit = async (e) => {
        setLoader(true)
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((data) => {
                successAlert()
                setLoader(false)
                navigate('/services');
            })
            .catch((error) => {
                unsuccessAlert(error);
            })
        await updateProfile({ displayName: values.displayName });
        setState({ ...state })
    }

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', width: '70%', margin: '10px auto', minHeight: '100vh', alignItems: 'center' }}>
            <Typography variant='h3' color='primary'>Please SignUp</Typography>
            {
                (loader || updating) && <Loader />
            }
            {
                success ? <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    key={vertical + horizontal}
                    open={open} onClose={handleClose} autoHideDuration={5000}>
                    <Alert onClose={handleClose} severity="success" color="success" sx={{ marginBottom: '10px' }}>
                        Account Create Successfull !!!!
                    </Alert>
                </Snackbar> :
                    <Snackbar
                        anchorOrigin={{ vertical, horizontal }}
                        key={vertical + horizontal}
                        open={open} onClose={handleClose} autoHideDuration={5000}>
                        <Alert onClose={handleClose} severity="error" color="error" sx={{ marginBottom: '10px' }}>
                            <Typography>{msg}</Typography>
                        </Alert>
                    </Snackbar>
            }
            <form onSubmit={handleSubmit}>

                <div>
                    <FormControl sx={{ m: 1, width: '52ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-displayName">Full Name</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-displayName"
                            onChange={handleChange('displayName')}
                            value={values.displayName}
                            label="First Name"
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl fullWidth sx={{ m: 1, width: '52ch' }}>
                        <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-email"
                            value={values.email}
                            onChange={handleChange('email')}
                            startAdornment={<InputAdornment position="start"><MailIcon /></InputAdornment>}
                            label="Email"
                        />

                    </FormControl>
                    <br />
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </div>
                <Button variant="outlined" type='submit'>Submit</Button>
            </form>
            <Divider />
            <Social />
        </Box>
    );
}
