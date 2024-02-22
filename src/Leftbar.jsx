import { useState } from 'react';
import React from 'react';
import Header from './Header';
import Search from './Search';
import "./Leftbar.css";

const Leftbar = (props) => {
    return (
        <div className='comp-leftbar'>
            <Header />
            <Search />
            <div className='title'>History</div>
        </div>
    )
};

export default Leftbar;