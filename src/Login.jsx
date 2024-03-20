import { useEffect, useState } from 'react';
import { useContext } from 'react';
import React from 'react';
import "./Login.css";
import Logo from "./assets/mlrun.png";
import Input from "./components/Input";
import Button from "./components/Button";
import { AppContext } from "./services/AppContext";

const Login = (props) => {
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
                <Input type="text" header="Enter your credentials" content="User Name" placetext="Enter your user name" />
                <Input type="password" content="Password" placetext="Enter your password" />
                {FailedToLoad ? (
                    <div className='failed'>
                        Incorrect email or password.<br />
                        Enter your sign in information again
                    </div>
                ) : (
                    <div></div>
                )}
                <Button label="Login" type="submit"
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