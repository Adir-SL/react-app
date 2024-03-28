import { useContext} from 'react';
import React from 'react';
import "./Admin.css";
import AppContext from "../services/AppContext";
import Table from "./components/Table";

const Admin = (props) => {
    const { admin, setAdmin } = useContext(AppContext);

    return (
        <div className='comp-admin'>
            <Table />
        </div>
    )
};

export default Admin;