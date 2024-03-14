import { useState } from 'react';
import React from 'react';
import "./Rightbar.css";
import Paragraph from "./components/Paragraph";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";
import Textarea from "./components/Textarea";
import Slider from "./components/Slider";

const Rightbar = (props) => {
    return (
        <div className='comp-rightbar open'>
            <div className="indicator" onClick={() => event.target.parentElement.classList.toggle("open")}></div>
            <div className='title'>Properties</div>
            <div className="inner-elements">
                <Paragraph header="Paragraph component" content="Bibendum vehicula aenean parturient blandit aliquam. Amet ipsum turpis integer gravida pulvinar aenean dictumst faucibus." />
                <Input type="text" header="Input component" content="Please type name" placetext="Placeholder only" />
                <Dropdown header="Dropdown component" content="Please select company" option={["Apple", "Samsung", "OnePlus", "Google", "Xiaomi"]} />
                <Dropdown header="Another dropdown" content="What's the best beverage?" option={["Water", "Coke", "Orange Juice", "Cider", "Coffee", "Tea", "Chai"]} />
                <Textarea header="Textarea component" content="Please type description" placetext="Placeholder only" />
                <Slider header="Slider component" content="Values are between 1 and 18" min="1" max="18" />
                <Slider header="Slider component" content="Values are between 1 and 99" min="1" max="99" />
            </div>
        </div>
    )
};

export default Rightbar;