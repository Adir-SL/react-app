import { useState } from 'react';
import React from 'react';
import "./Slider.css";

const Slider = (props) => {
    const [slider, setSlider] = useState(props.max);
    return (
        <div className='comp-slider'>
            <h3>{props.header}</h3>
            <p>{props.content}</p>
            <div className='tooltip' style={{ left: ((slider - props.min) * (160 / (props.max - props.min))) + "px" }}>{slider}</div>

            <div className="slider-flex">
                <input type="range" min={props.min} max={props.max} className="slider" value={slider} onChange={() => setSlider(event.target.value)}></input>
                <input type="number" className='slider-input' min={props.min} max={props.max} value={slider} onChange={() => setSlider(event.target.value)} />
            </div>
        </div>
    )
};

export default Slider;