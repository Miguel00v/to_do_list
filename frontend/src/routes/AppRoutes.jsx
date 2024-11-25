import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import UserDashboard from '../pages/userDashboard';
import Home from '../pages/Homepage';
import ManageAccount from '../pages/ManageAccount';
import ResetPassword from '../pages/ResetPassword';
import Logout from '../pages/Logout';

function AppRoutes(){
    return(
        <>
            {/* Define routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path='/create-account' element={<CreateAccount />} />
                <Route path='/userDashboard' element={<UserDashboard />} />
                <Route path='/manageAccount' element={<ManageAccount />} />
                <Route path='/resetPassword' element={<ResetPassword />} />
                <Route path='/logout' element={<Logout />} />
            </Routes>
        </>
    );
}

export default AppRoutes;