import { useState } from 'react';
import React from 'react';
import "./Input.css";

const Input = (props) => {
    return (
        <div className='comp-input'>
            <h3>{props.header}</h3>
            <p>{props.content}</p>
            <input type="text" placeholder={props.placetext} />
        </div>
    )
};

export default Input;