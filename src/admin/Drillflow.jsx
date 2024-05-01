import { useContext } from 'react';
import React from 'react';
import { createRoot } from "react-dom/client";
import "./Drilldown.css";
import Table from "./components/Table";
import Breadcrumbs from './components/Breadcrumbs';
import Tabs from "./components/Tabs";
import Flow from "./components/Flow";

const Drillflow = () => {
    return (
        <div className='comp-drilldown'>
            <div className="content">
                {/* <Breadcrumbs /> */}
                <Tabs label={["First tab", "Second one", "Center one", "Forth forth", "Last tab"]} selected="0" />
                <Flow initialNodes={[{ id: '1', position: { x: 50, y: 50 }, data: { label: 'item-1' } }, { id: '2', position: { x: 150, y: 150 }, data: { label: 'item-2' } }, { id: '3', position: { x: 50, y: 250 }, data: { label: 'item-3' } }]} initialEdges={[{ id: 'e1-2', source: '1', target: '2' }, { id: 'e2-3', source: '2', target: '3' }]} />
            </div>
        </div>
    )
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Drillflow />);