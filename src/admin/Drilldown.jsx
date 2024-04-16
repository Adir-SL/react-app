import { useContext } from 'react';
import React from 'react';
import { createRoot } from "react-dom/client";
import "./Drilldown.css";
import Table from "./components/Table";
import Breadcrumbs from './components/Breadcrumbs';
import Tabs from "./components/Tabs";

const Drilldown = () => {
    return (
        <div className='comp-drilldown'>
            <div className="content">
                <Breadcrumbs />
                <Tabs label={["First tab", "Second one", "Center one", "Forth forth", "Last tab"]} selected="0" />
                <Table />
            </div>
        </div>
    )
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Drilldown />);