import { useState } from 'react';
import React from 'react';
import "./Dropdown.css";

const Dropdown = (props) => {
    const options = props.option;

    // Define the callback function
    const handleChange = (event) => {
        // Call the callback with the selected option
        props.onChange(event.target.value);
    };

    return (
        <div className='comp-dropdown'>
            <h3>{props.header}</h3>
            <p>{props.content}</p>
            <select onChange={handleChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
};

export default Dropdown;