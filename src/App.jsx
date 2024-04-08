
import { useState } from 'react';
import { createRoot } from "react-dom/client";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Chat from "./Chat";
import { AppContext } from "./services/AppContext";
import Login from "./Login";
import Admin from "./admin/Admin";
import "./App.css";

const App = () => {
    const [sessionId, setSessionId] = useState('');
    const [username, setUsername] = useState('John Doe');
    const [admin, setAdmin] = useState(false);
    const [login, setLogin] = useState(true);
    const changeLogin = (data) => {
        setLogin(data);
    }

    return (
        <div className="app-flex">
            <AppContext.Provider value={{ sessionId, setSessionId, username, setUsername, admin, setAdmin }}>
                {!login
                    ? !admin
                        ? <div className="app-flex"><Leftbar onlogin={changeLogin} user={username} /><Chat /><Rightbar /></div>
                        :
                        <div className="app-flex">
                            <Admin onlogin={changeLogin} />
                        </div>

                    : <Login onlogin={changeLogin} />
                }
            </AppContext.Provider>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);