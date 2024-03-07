import {Routes,Route } from "react-router-dom";
import React from "react";

import Banner1 from "./Banner1";
import Login from "../components/Login";
import SignUp from "./SingUp";

const AllRoutes = () => {
  return (
    <div>
      
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/Banner1" element={<Banner1/>}/>
        </Routes>
      
        
    </div>
  )
}

export default AllRoutes