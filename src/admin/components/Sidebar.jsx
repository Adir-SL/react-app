import { useContext} from 'react';
import React from 'react';
import "./Sidebar.css";

const Sidebar = (props) => {

    return (
        <div className='comp-sidebar'>
            <div className="side-item">Users</div>
            <div className="side-item">Chat Histories</div>
            <div className="side-item">Data Sets</div>
            <div className="side-item">Documents</div>
            <div className="side-item">Pipelines</div>

        </div>
    )
};

export default Sidebar;