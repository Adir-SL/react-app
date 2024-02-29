
import { createRoot } from "react-dom/client";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Chat from "./components/Chat";
import "./App.css";

const App = () => {
    return (
        <div className="app-flex">
            <Leftbar />
            <Chat />
            <Rightbar />
            {/* TODO: Make a sub-directory for components, App should be left out */}
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);