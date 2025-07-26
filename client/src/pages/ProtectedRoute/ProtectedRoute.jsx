import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, allowedRole}) => {
    const userRole = localStorage.getItem("userRole");
    const token = localStorage.getItem("userToken");

     // Check if user is logged in and has the correct role
     if(token && userRole === allowedRole){
        return element;
     }else{
        return <Navigate to="/login" replace/>
     }
}

export default ProtectedRoute;