import { useEffect, useState } from 'react';
import React from 'react';
import "./Login.css";
import Logo from "./assets/mlrun.png";
import Input from "./components/Input";
import Button from "./components/Button";

const Login = (props) => {
    return (
        <div className='comp-login'>
            <div className="login-flex">
                <div className="logo"><img src={Logo} /></div>
                <Input header="Enter your credentials" placetext="User Name" />
                <Input placetext="Password" />
                <Button label="Login" />
            </div>
        </div>
    )
};

export default Login;