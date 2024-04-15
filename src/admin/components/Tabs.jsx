import { useState } from 'react';
import React from 'react';
import "./Tabs.css";

const Tabs = (props) => {
    const labels = props.label;

    return (
        <div className={"comp-tabs"}>
            {labels.map((label, index) => (
                index == props.selected ? (
                    <div className={'tab selected'}>{label}</div>
                ):(
                    <div className={'tab'}>{label}</div>
                )

            ))}
        </div>
    )
};

export default Tabs;