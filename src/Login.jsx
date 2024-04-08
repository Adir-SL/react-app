import { useEffect, useState } from 'react';
import { useContext } from 'react';
import React from 'react';
import "./Login.css";
import Logo from "./assets/mlrun.png";
import Input from "./components/Input";
import Button from "./components/Button";
import { AppContext } from "./services/AppContext";

const Login = (props) => {
    const { admin, setAdmin } = useContext(AppContext);
    const { sessionId, setSessionId, username, setUsername } = useContext(AppContext);
    const [FailedToLoad, setFailedToLoad] = useState(false);

    function submitFunc() {
        setUsername(document.querySelectorAll('input')[0].value);
        if (document.querySelectorAll('input')[0].value == 'fail') {
            setFailedToLoad(true);
        } else {
            setTimeout(function () {
                props.onlogin(false);
            }, 200);
        }
    }

    return (
        <div className='comp-login'>

            <form className="login-flex" onSubmit={e => e.preventDefault()}>
                <div className="logo"><img src={Logo} /></div>
                <Input type="text" header="Enter your credentials" content="User Name" placetext="Enter your user name" value="guest"/>
                <Input type="password" content="Password" placetext="Enter your password" value="XxYaz12345"/>
                {FailedToLoad ? (
                    <div className='failed'>
                        Incorrect email or password.<br />
                        Enter your sign in information again
                    </div>
                ) : (
                    <div></div>
                )}
                <div className='toggle-flex'>
                    <input type='checkbox' className='toggle' id='mode' checked={admin} onClick={() => setAdmin(!admin)} />
                    <label for='mode'>Admin mode</label>
                </div>
                <Button label="Login"
                    onClick={() => {
                        submitFunc();
                    }}
                />
            </form>
        </div>
    )
};
// onClick={() => setText('Hello, world!')}

export default Login;