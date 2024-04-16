import { useState } from 'react';
import React from 'react';
import "./Input.css";

const Input = (props) => {
    return (
        <div className='comp-input'>
            <h3>{props.header}</h3>
            <p>{props.content}</p>
            <input type={props.type} placeholder={props.placetext} value={props.value} onChange={props.onChange}/>
        </div>
    )
};

export default Input;