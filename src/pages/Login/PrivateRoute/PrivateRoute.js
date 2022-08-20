import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../../Loader/Loader'
import auth from '../../../firebase.init';
import {
    useLocation,
    Navigate,
} from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Loader />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;