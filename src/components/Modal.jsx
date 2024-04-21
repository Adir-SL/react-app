import { useState } from 'react';
import React from 'react';
import "./Modal.css";

const Modal = (props) => {
    return (
        <div className='comp-modal'>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <footer>
                <button>Cancel</button>
                <button>OK</button>
            </footer>
        </div>
    )
};

export default Modal;