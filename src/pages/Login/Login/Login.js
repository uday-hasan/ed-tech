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
import { signInWithEmailAndPassword } from "firebase/auth";
import Snackbar from '@mui/material/Snackbar';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    useLocation,
    useNavigate,
} from "react-router-dom";
import Social from '../Social/Social';

export default function InputAdornments() {

    /* Redirect to page */
    let navigate = useNavigate();
    let location = useLocation();
    const [user] = useAuthState(auth);
    let from = location.state?.from?.pathname || "/";

    // Get value from form
    const [values, setValues] = React.useState({
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
    const { vertical, horizontal, open, success } = state;

    const successAlert = () => {
        setState({ ...state, open: true, success: true });
    }
    const unsuccessAlert = (error) => {
        setState({ ...state, open: true, success: false });
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

    // ***** Form Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((data) => {
                successAlert()
            })
            .catch((error) => {
                if (error.code === 'auth/wrong-password') {
                    setMsg('Email or Password wrong')
                    console.log(msg);
                }
                else if (error.code === 'auth/user-not-found') {
                    setMsg('User not found')
                }
                else { setMsg('Something Went Wrong') }
                unsuccessAlert(error);
            })
        setState({ ...state })
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <Box sx={{
            display: 'flex', flexWrap: 'wrap', flexDirection: 'column', width: '70%', margin: '20px auto', minHeight: '100vh', alignItems: 'center'
        }}>
            <Typography variant='h3'>Please Login</Typography>
            {
                success ? <Snackbar
                    anchorOrigin={{ vertical, horizontal }
                    }
                    key={vertical + horizontal}
                    open={open} onClose={handleClose} autoHideDuration={5000}>
                    <Alert onClose={handleClose} severity="success" color="success" sx={{ marginBottom: '10px' }}>
                        Signed In Success !
                    </Alert>
                </Snackbar> :
                    <Snackbar
                        anchorOrigin={{ vertical, horizontal }}
                        key={vertical + horizontal}
                        open={open} onClose={handleClose} autoHideDuration={5000}>
                        <Alert onClose={handleClose} severity="error" color="error" sx={{ marginBottom: '10px' }}>

                            <p>{msg}</p>
                        </Alert>
                    </Snackbar>
            }
            <form onSubmit={handleSubmit}>
                <div>
                    <FormControl fullWidth sx={{ m: 1, width: '40ch' }}>
                        <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-email"
                            value={values.email}
                            onChange={handleChange('email')}
                            startAdornment={<InputAdornment position="start"><MailIcon /></InputAdornment>}
                            label="Email"
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
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
                <Button variant="outlined" type='submit'>Login</Button>
                <Typography variant='p' component={'p'} sx={{ m: '15px 0' }} >Don't have an have an account ? <Link to='/signup'>Sign Up</Link></Typography>
            </form>
            <Divider light />
            <Social />

        </Box >
    );
}
