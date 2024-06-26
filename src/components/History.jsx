import { useContext, useState, useEffect } from 'react';
import React from 'react';
import "./History.css";
import Modal from "./Modal";
import { AppContext } from "../services/AppContext";

function selectFunc(sid) {
    var x = document.getElementsByClassName("inner-button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('selected');
    }
    var element = document.getElementById(`chat-${sid}`);
    if (element) {
        element.classList.add('selected');
    }
}


const History = (props) => {
    const { sessionId, setSessionId } = useContext(AppContext);
    const histories = props.history;
    const { modal, setModal } = useContext(AppContext);

    const selectChat = (sid) => {
        console.log('MODAL: ', modal);
        console.log('selected chat:', sid, sessionId)
        if (sid === sessionId) {
            return;
        }
        selectFunc(sid)
        props.setNew(false)
        setSessionId(sid)
    }


    useEffect(() => {
        selectFunc(sessionId);
    });

    return (
        <div className='comp-history'>

            <div className="inner-flex">
                {histories.map((history, index) => (
                    <button key={index}>
                        <button
                            className='inner-button'
                            id={`chat-${history.name}`}
                            onMouseOver={(e) => {
                                window.historyTemp = e.target;
                            }}
                            onClick={(event) => {
                                selectChat(history.name);
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
                                <div className="menu-item" onClick={() => { setModal(true) }}>
                                    <div className="menu-icon delete"></div>
                                    Delete
                                </div>
                            </div>
                        </details>
                    </button>
                ))}
            </div>
            {modal && <Modal title="Delete session" content="This will delete the selected session forever and it cannot be undone." mainFunc={() => { window.historyTemp.parentElement.outerHTML = ''; setModal(false); }} />}
        </div>
    )
};

export default History;