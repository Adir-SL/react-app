import { useState } from 'react';
import React from 'react';
import "./Tabs.css";

const Tabs = (props) => {
    const labels = props.label;
    function tabSelect(e) {
        var x = document.getElementsByClassName("tab");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].classList.remove('selected');
        }
        e.target.classList.add('selected');
    }

    return (
        <div className={"comp-tabs"}>
            {labels.map((label, index) => (
                index == props.selected ? (
                    <button
                        className={'tab selected'}
                        onClick={(event) => {
                            tabSelect(event);
                        }}
                    >
                        {label}
                    </button>
                ) : (
                    <button
                        className={'tab'}
                        onClick={(event) => {
                            tabSelect(event);
                        }}
                    >
                        {label}
                    </button>
                )

            ))}
        </div>
    )
};

export default Tabs;