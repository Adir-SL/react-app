import { useState, useContext } from 'react';
import React from 'react';
import "./Modal.css";
import { AppContext } from "../services/AppContext";

const Modal = (props) => {
    const { modal, setModal } = useContext(AppContext);
    return (
        <div className='comp-modal'>
            <div className="modal">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <footer>
                    <button className='second-button' onClick={() => { setModal(false) }}>Cancel</button>
                    <button>OK</button>
                </footer>
            </div>
        </div>
    )
};

export default Modal;