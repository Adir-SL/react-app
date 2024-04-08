import { useEffect, useState } from 'react';
import React from 'react';
import "./Message.css";
import Button from "./Button"
import Client from './../services/Api.ts'

const Message = ({ setter }) => {
    const [inputValue, setInputValue] = useState('');

    const submitMessage = async () => {
        console.log('inputValue:', inputValue);
        setter(prevMessages => [...prevMessages, { role: 'Human', content: inputValue, sources: null }]);
        setInputValue('');
        setTimeout(function () {
            var lastBubble = document.getElementsByClassName("help-text").length - 1;
            document.getElementsByClassName("help-text")[lastBubble].scrollIntoView(false);
        }, 50);

        setter(prevMessages => [...prevMessages, { role: 'AI', content: '![Thinking](/assets/thinking.gif)', sources: null }]);
        const result = await Client.submitQuery('id', inputValue);
        setter(prevMessages => [
            ...prevMessages.slice(0, -1),
            { role: 'AI', content: result.answer, sources: result.sources }
        ]);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Prevent the default action to avoid adding a new line
            submitMessage();
        }
    };


    return (
        <div className='comp-message'>
            <div className="input">
                <div className="icon-button plus-icon"></div>
                <input
                    type='text'
                    placeholder='Send message...'
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <div className="icon-button mic-icon"></div>
                <Button label="Send" onClick={submitMessage} />
            </div>
        </div>
    )
};

export default Message;