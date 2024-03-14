import { createRoot } from "react-dom/client";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Chat from "./Chat";
import Login from "./Login";
import "./App.css";
import { useState } from 'react';

const App = () => {
    const [login, setLogin] = useState(false);
    const changeLogin = (data) => {
        setLogin(data);
    }

    return (
        <div className="app-flex">
            {!login
                ? <div className="app-flex"><Leftbar onlogin={changeLogin} /><Chat /><Rightbar /></div>
                : <Login onlogin={changeLogin} />
            }
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);