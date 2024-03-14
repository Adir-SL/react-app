import { useContext } from 'react';
import { useState } from 'react';
import React from 'react';
import Header from './components/Header';
// import Search from './Search';
import History from './components/History';
import Button from './components/Button';
import "./Leftbar.css";
import Client from './services/Api.ts';
import {AppContext, generateSessionId} from "./services/AppContext";

const func = Client.listSessions
const arr =  await func()

const Leftbar = (props) => {
    const {sessionId, setSessionId, username, setUsername} = useContext(AppContext);

    const newChat = async () => {
        let sid = generateSessionId()
        setSessionId(sid)
    }

    const changeLoginAgain = (data) => {
        props.onlogin(true);
    }


    return (
        <div className='comp-leftbar'>
            <Header onloginchange={changeLoginAgain} />
            <div className="inner">
                {/* <Search /> */}
                <History history={arr} />
            </div>
            <div class="footer-flex">
                <Button label="New chat" onClick={newChat}/>
            </div>
        </div>
    )
};

export default Leftbar;