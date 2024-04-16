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
        setTimeout(function () {
            var x = document.getElementsByTagName("a");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].addEventListener("click", linkClick);
            }
        }, 100);
    }

    function linkClick() {
        resetLinks();

        document.getElementById("drillFrame").classList.add('shown');
        this.parentElement.parentElement.style.backgroundColor = "#eef5ff";
    }

    function resetLinks() {
        var x = document.getElementsByTagName("a");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].parentElement.parentElement.style.backgroundColor = "transparent";
        }
    }


    return (
        <div className={"comp-table"}>
            <div className="drilldown" id="drillFrame">
                <button className='close-button'
                    onClick={() => {
                        resetLinks();
                        document.getElementById("drillFrame").classList.remove('shown');
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </button>
                <iframe name="drill"></iframe>
            </div>
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