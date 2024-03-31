import { useState } from 'react';
import React from 'react';
import "./Table.css";
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Table = (props) => {
    const [rowData, setRowData] = useState([
        { name: "David", created: "6 October 2016", updated: "6 October 2016", tags: "Complaint", resolved: true },
        { name: "Michael", created: "2 January 2018", updated: "2 January 2018", tags: "Complaint", resolved: true },
        { name: "Kate", created: "28 February 2020", updated: "28 February 2020", tags: "Support", resolved: false },
        { name: "Barry", created: "14 May 2020", updated: "14 May 2020", tags: "Support", resolved: false },
        { name: "Daniel", created: "19 June 2023", updated: "19 June 2023", tags: "Support", resolved: false },
        { name: "Michal", created: "6 October 2016", updated: "6 October 2016", tags: "Complaint", resolved: true },
        { name: "Karen", created: "2 January 2018", updated: "2 January 2018", tags: "Support", resolved: false },
        { name: "Adi", created: "28 February 2020", updated: "28 February 2020", tags: "Complaint", resolved: true },
        { name: "Natalie", created: "14 May 2020", updated: "14 May 2020", tags: "Complaint", resolved: false },
        { name: "Neta", created: "19 June 2023", updated: "19 June 2023", tags: "Support", resolved: false },
        { name: "Ophir", created: "6 October 2016", updated: "6 October 2016", tags: "Complaint", resolved: true },
        { name: "Simon", created: "2 January 2018", updated: "2 January 2018", tags: "Support", resolved: false },
        { name: "Lily", created: "28 February 2020", updated: "28 February 2020", tags: "Complaint", resolved: true },
        { name: "John", created: "14 May 2020", updated: "14 May 2020", tags: "Support", resolved: false },
        { name: "Eric", created: "19 June 2023", updated: "19 June 2023", tags: "Support", resolved: true },
        { name: "Igor", created: "6 October 2016", updated: "6 October 2016", tags: "Support", resolved: true },
        { name: "Jack", created: "2 January 2018", updated: "2 January 2018", tags: "Complaint", resolved: false },
        { name: "Danny", created: "28 February 2020", updated: "28 February 2020", tags: "Support", resolved: false },
        { name: "Ken", created: "14 May 2020", updated: "14 May 2020", tags: "Complaint", resolved: false },
        { name: "Rafi", created: "19 June 2023", updated: "19 June 2023", tags: "Support", resolved: true },
    ]);

    const [colDefs, setColDefs] = useState([
        { field: "name" },
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