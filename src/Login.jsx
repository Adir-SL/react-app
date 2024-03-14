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
                <Input type="text" header="Enter your credentials" content="User Name" placetext="Enter your user name" />
                <Input type="password" content="Password" placetext="Enter your password" />
                <Button label="Login" onClick={() => {props.onlogin(false)}} />
            </div>
        </div>
    )
};

export default Login;