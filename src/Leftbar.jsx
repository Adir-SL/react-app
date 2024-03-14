import { useState } from 'react';
import React from 'react';
import Header from './components/Header';
// import Search from './Search';
import History from './components/History';
import Button from './components/Button';
import "./Leftbar.css";
import MockClient from './services/Mock.ts';

const Mock = new MockClient
const func = Mock.listSessions
const arr = await func()

const Leftbar = (props) => {
    const changeLoginAgain = (data) => {
        props.onlogin(true);
    }
    return (
        <div className='comp-leftbar'>
            <Header onloginchange={changeLoginAgain} />
            <div className="inner">
                {/* <Search /> */}
                <History history={arr} />
            </div>
            <div class="footer-flex">
                <Button label="New chat" />
            </div>
        </div>
    )
};

export default Leftbar;