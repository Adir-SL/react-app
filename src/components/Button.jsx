import { useState } from 'react';
import React from 'react';
import "./Button.css";

const Button = (props) => {
    return (
        <button className='comp-button' onClick={props.onClick}>
            {props.label}
        </button>
    )
};

export default Button;