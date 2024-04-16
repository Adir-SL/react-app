import { useEffect, useState } from 'react';
import { useContext } from 'react';
import React from 'react';
import "./Login.css";
import Logo from "./assets/mlrun.png";
import Input from "./components/Input";
import Button from "./components/Button";
import { AppContext } from "./services/AppContext";


const Login = () => {
    const { sessionId, setSessionId, username, setUsername, admin, setAdmin } = useContext(AppContext);
    const [LoginError, setLoginError] = useState('');
    const [formuser, setFormuser] = useState('guest');
    const [password, setPassword] = useState('XxYaz12345');

    function submitFunc(event) {
        event.preventDefault();
        console.log('submitting:', formuser)
        if (formuser === 'fail') {
            setLoginError('Incorrect email or password, please enter your sign in information again');
        } else {
            setUsername(formuser);
        }
    }

    return (
        <div className='comp-login'>

            <form className="login-flex">
                <div className="logo"><img src={Logo} /></div>
                <Input type="text" header="Enter your credentials" content="User Name" placetext="Enter your user name" value={formuser} onChange={e => {setFormuser(e.target.value)}}/>
                <Input type="password" content="Password" placetext="Enter your password" value={password} onChange={e => setPassword(e.target.value)}/>
                {LoginError ? (
                    <div className='failed'>{LoginError}</div>
                ) : (
                    <div></div>
                )}
                <div className='toggle-flex'>
                    <input type='checkbox' className='toggle' id='mode' checked={admin} onClick={() => setAdmin(!admin)} />
                    <label for='mode'>Admin mode</label>
                </div>
                <Button label="Login" onClick={submitFunc} type="submit"/>
            </form>
        </div>
    )
};
// onClick={() => setText('Hello, world!')}

export default Login;