import { useState } from 'react';
import React from 'react';
import "./Table.css";
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Table = (props) => {
    const [rowData, setRowData] = useState([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ]);

    const [colDefs, setColDefs] = useState([
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" }
    ]);

    const autoSizeStrategy = {
        type: 'fitGridWidth',
        defaultMinWidth: 100,
        columnLimits: [
            {
                colId: 'country',
                minWidth: 100
            }
        ]
    };
    return (
        <div className={"comp-table"}>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                autoSizeStrategy={autoSizeStrategy}
                className='gridTable comp-table ag-theme-quartz'
            />
        </div>
    )
};

export default Table;