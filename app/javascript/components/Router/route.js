import React from 'react';
import { Route, Routes } from "react-router-dom";
import SignInpage from "../Sign_in/Sign_in_page";
import Signuppage from "../Sign_up/Sign_up_page";
import User from "../User/User";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import RoutesPath from "./RoutesPath";

const RoutesPage = () =>{
 return (
    <Routes >
    <Route element={<PrivateRoute />}>
      <Route path={RoutesPath.USER} element={<User />} />
    </Route>
    <Route element={<PublicRoute />}>
        <Route path={RoutesPath.SIGN_UP} element={<Signuppage/>} />
        <Route path={RoutesPath.SIGN_IN} element={<SignInpage />} />
        <Route path="*" element={<p>Page Not Found</p>} />
    </Route>

   
  </Routes>
 )
}

export default RoutesPage;