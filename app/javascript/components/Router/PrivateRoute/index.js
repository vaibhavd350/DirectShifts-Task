import React from 'react';
import {Outlet , Navigate } from "react-router-dom"

const PrivateRoute = () =>{
    const auth = sessionStorage.getItem("token")
    return(auth ?<Outlet /> : <Navigate to="/" />)
}

export default PrivateRoute