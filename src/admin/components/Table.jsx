import { useState } from 'react';
import React from 'react';
import "./Table.css";
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Table = (props) => {
    const [rowData, setRowData] = useState(props.data);

    function codeRender(params) {
        const link = params.value;
        return params.value
    }

    const [colDefs, setColDefs] = useState([
        { field: "name", cellRenderer: codeRender, },
        { field: "created" },
        { field: "updated" },
        { field: "tags" },
        { field: "resolved" }
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

    function addLinks() {
        console.log('yasdasydfy')

        setTimeout(function () {
            var x = document.getElementsByTagName("a");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].addEventListener("click", function () { document.getElementById("drillFrame").classList.add('shown') });
            }
        }, 100);
    }


    return (
        <div className={"comp-table"}>
            <iframe className="drilldown" name="drill" id="drillFrame"></iframe>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                autoSizeStrategy={autoSizeStrategy}
                className='gridTable comp-table ag-theme-quartz'
            />
            {addLinks()}
        </div>
    )
};

export default Table;