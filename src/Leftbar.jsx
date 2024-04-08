import { useState, useEffect, useContext } from 'react';
import React from 'react';
import Header from './components/Header';
// import Search from './Search';
import History from './components/History';
import Button from './components/Button';
import "./Leftbar.css";
import Client from './services/Api.ts';
import {AppContext, generateSessionId} from "./services/AppContext";

const Leftbar = (props) => {
    const {sessionId, setSessionId, username, setUsername} = useContext(AppContext);
    const [history, setHistory] = useState([]);

    const newChat = async () => {
        let sid = generateSessionId()
        setSessionId(sid)
        // Fetch sessions after new chat is created
        await fetchSessions();
    }

    const selectChat = async (sid) => {
        console.log('selected chat:', sid)
        setSessionId(sid)
    }

    const changeLoginAgain = (data) => {
        props.onlogin(true);
        fetchSessions();
    }

    const fetchSessions = async () => {
        try {
            const sessions = await Client.listSessions(username);
            setHistory(sessions);
        } catch (error) {
            console.error('Failed to fetch sessions:', error);
        }
    }

    useEffect(() => {
        fetchSessions();
    }, []);




    return (
        <div className='comp-leftbar'>
            <Header user={props.user} onloginchange={changeLoginAgain} />
            <div className="inner">
                {/* <Search /> */}
                <History history={history} onSelect={selectChat}/>
            </div>
            <div class="footer-flex">
                <Button label="New chat" onClick={newChat}/>
            </div>
        </div>
    )
};

export default Leftbar;