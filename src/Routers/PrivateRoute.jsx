import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import LoaderPage from '../Components/LoaderPage';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(user) return children;

    if(loading) return <LoaderPage/>

    return (
        <div>
            <Navigate state={location.pathname} to="/auth/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;