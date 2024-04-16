
import { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Chat from "./Chat";
import { AppContext, generateSessionId } from "./services/AppContext";
import Login from "./Login";
import Admin from "./admin/Admin";
import "./App.css";
import Client from './services/Api.ts';

const App = () => {
    const [sessionId, setSessionId] = useState('');
    const [username, setUsername] = useState('');
    const [admin, setAdmin] = useState(false);

    return (
        <div className="app-flex">
            <AppContext.Provider value={{ sessionId, setSessionId, username, setUsername, admin, setAdmin }}>
                {username
                    ? !admin
                        ? <div className="app-flex"><Leftbar/><Chat /><Rightbar /></div>
                        : <div className="app-flex"><Admin /></div>
                    : <Login />
                }
            </AppContext.Provider>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);