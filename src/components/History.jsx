import { useState } from 'react';
import React from 'react';
import "./History.css";
function selectFunc(event) {
    var x = document.getElementsByClassName("inner-button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
}


const History = (props) => {
    const histories = props.history;

    return (
        <div className='comp-history'>

            <div className="inner-flex">
                {histories.map((history) => (
                    <button>
                        <button
                            className='inner-button'
                            onClick={(event) => {
                                props.onSelect(history.name);
                                selectFunc(event);
                            }}
                        >
                            {history.description || history.name}
                        </button>
                        <details>
                            <summary>
                                <div className="icon-button"></div>
                            </summary>
                            <div className="menu">
                                <div className="menu-item">
                                    <div className="menu-icon rename"></div>
                                    Rename
                                </div>
                                <div className="menu-item">
                                    <div className="menu-icon pdf"></div>
                                    Export to PDF
                                </div>
                                <div className="menu-item">
                                    <div className="menu-icon archive"></div>
                                    Archive
                                </div>
                                <div className="menu-item">
                                    <div className="menu-icon delete"></div>
                                    Delete
                                </div>
                            </div>
                        </details>
                    </button>
                ))}
            </div>
        </div>
    )
};

export default History;