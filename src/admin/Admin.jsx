import { useContext } from 'react';
import React from 'react';
import "./Admin.css";
import AppContext from "../services/AppContext";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import Breadcrumbs from './components/Breadcrumbs';
import Tabs from "./components/Tabs";

const Admin = (props) => {
    const { sessionId, setSessionId, username, setUsername } = useContext(AppContext);
    const { admin, setAdmin } = useContext(AppContext);

    const changeLoginAgain = (data) => {
        props.onlogin(true);
    }

    return (
        <div className='comp-admin'>
            <Topbar user={username} onloginchange={changeLoginAgain} />
            <div className="flex">
                <Sidebar />
                <div className="content">
                    <Breadcrumbs />
                    <Tabs label={["First tab", "Second one", "Center one", "Forth forth", "Last tab"]} selected="0" />
                    <Table />
                </div>
            </div>
        </div>
    )
};

export default Admin;