import React from 'react';
import {Outlet , Navigate } from "react-router-dom"

const PublicRoute = () =>{
    const auth = sessionStorage.getItem("token")
    return( !auth ?<Outlet /> : <Navigate to="/user" />)
}

export default PublicRoute