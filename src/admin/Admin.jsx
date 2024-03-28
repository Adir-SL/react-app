import { useContext } from 'react';
import React from 'react';
import "./Admin.css";
import AppContext from "../services/AppContext";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import Breadcrumbs from './components/Breadcrumbs';

const Admin = (props) => {
    const { admin, setAdmin } = useContext(AppContext);

    return (
        <div className='comp-admin'>
            <Topbar />
            <div className="flex">
                <Sidebar />
                <div className="content">
                    <Breadcrumbs />
                    <Table />
                </div>
            </div>
        </div>
    )
};

export default Admin;