import { useState } from 'react';
import React from 'react';
import "./Bubble.css";
import IconBot from "./IconBot";
import IconHuman from "./IconHuman";
import Sources from "./Sources";
import Markdown from 'react-markdown';

const Bubble = (props) => {
    return (
        <div className={'comp-bubble ' + props.bot}>
            {props.bot == 'AI'
                ? <IconBot />
                : <IconHuman />
            }
            <div className="flex-column">
                <div className='inner-bubble'>
                    <Markdown>{props.content}</Markdown>
                    <div className='html-code' dangerouslySetInnerHTML={{ __html: props.html }}></div>
                </div>
                {props.bot == 'AI' ? <div className='help-text'>Was this helpful? <button>👍</button><button>👎</button></div> : <div className='help-text'></div>}

                {props.source ? <Sources source={props.source} /> : <div></div>}
            </div>


            <button className='copy-icon' onClick={() => {
                navigator.clipboard.writeText(props.content);
            }}></button>

            {/* [X] TODO: Microphone should kinda work, make it a toggle of 2 colors */}
            {/* [ ] TODO: new components: graph (like MLRun nodes) */}
            {/* [ ] TODO: Add 'suggest' icon, to open popup w alternative text input */}
            {/* [ ] TODO: Add a dropdown to login w name+description (of different apps) */}
            {/* [ ] TODO: Add a Modal component for Delete an session  */}
        </div>
    )
};

export default Bubble;