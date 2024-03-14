import { useEffect, useState } from 'react';
import React from 'react';
import "./Login.css";
import Logo from "./assets/mlrun.png";
import Input from "./components/Input";

const Login = (props) => {
    return (
        <div className='comp-login'>
            <div className="logo"><img src={Logo} /></div>
            <Input header="Enter your credentials" placetext="User Name" />
            <Input placetext="Password" />
        </div>
    )
};

export default Login;