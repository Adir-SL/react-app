import { useEffect, useState } from 'react';
import { useContext } from 'react';
import React from 'react';
import "./Login.css";
import Logo from "./assets/mlrun.png";
import Input from "./components/Input";
import Button from "./components/Button";
import {AppContext} from "./services/AppContext";

const Login = (props) => {
    const {sessionId, setSessionId, username, setUsername} = useContext(AppContext);

    return (
        <div className='comp-login'>
            <div className="login-flex">
                <div className="logo"><img src={Logo} /></div>
                <Input type="text" header="Enter your credentials" content="User Name" placetext="Enter your user name" onChange={() => {setUsername('Adam');}} />
                <Input type="password" content="Password" placetext="Enter your password" />
                <Button label="Login" onClick={() => {
                    console.log(username);
                    props.onlogin(false);
                }} />
            </div>
        </div>
    )
};
// onClick={() => setText('Hello, world!')}

export default Login;