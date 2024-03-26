import { useState } from 'react';
import React from 'react';
import "./Bubble.css";
import IconBot from "./IconBot";
import IconHuman from "./IconHuman";
import Sources from "./Sources";
import Markdown from 'react-markdown';
import { createGrid } from 'ag-grid-community';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const gridOptions = {
	columnDefs: [
		{ headerName: 'Make', field: 'make' },
		{ headerName: 'Model', field: 'model' },
		{ headerName: 'Price', field: 'price' }
	],
	rowData: [
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxster', price: 72000 }
	]
};
const eGridDiv = document.querySelector('#myGrid');
const api = createGrid(eGridDiv, gridOptions);

const Bubble = (props) => {
    return (
        <div className={'comp-bubble ' + props.bot}>
            {props.bot == 'AI'
                ? <IconBot />
                : <IconHuman />
            }
            <div className="flex-column">
                <div className='inner-bubble'>
                    <Markdown>{props.content}</Markdown>
                    <div className='html-code' dangerouslySetInnerHTML={{__html: props.html}}></div>
                    <div id="myGrid" style="height: 150px; width: 600px" class="ag-theme-quartz"></div>
                </div>
                {props.bot == 'AI' ? <div className='help-text'>Was this helpful? <button>👍</button><button>👎</button></div> : <div className='help-text'></div>}

                {props.source ? <Sources source={props.source} /> : <div></div>}
            </div>


            <button className='copy-icon' onClick={() => {
                navigator.clipboard.writeText(props.content);
            }}></button>

            {/* TODO: new components: graph (like MLRun nodes) */}
            {/* TODO: new components: table (from json - try to look in npm) (filters, sortings etc.) */}

            {/* TODO: Add 'suggest' icon, to open popup w alternative text input */}
        </div>
    )
};

export default Bubble;