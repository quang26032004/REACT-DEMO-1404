import React, { useState } from 'react';
import './data.css';

const MainPage = () => {
    const [inputText, setInputText] = useState('');
    const [data, setData] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSendData = () => {
        setData(inputText);
        setInputText('');
    };

    return (
        <div className='component-container'>
            <ComponentTop
                inputText={inputText}
                onInputChange={handleInputChange}
                onSendData={handleSendData}
            />
            <ComponentBottom data={data} />
        </div>
    );
};

const ComponentTop = ({ inputText, onInputChange, onSendData }) => {
    return (
        <div className='send__data'>
            <input type="text" value={inputText} onChange={onInputChange} />
            <button
            className='send__data__button' 
            onClick={onSendData}>Send Data</button>
        </div>
    );
};

const ComponentBottom = ({ data }) => {
    return (
        <div className='componentBottom'>
            <textarea value={data} readOnly />
        </div>
    );
};

export default MainPage;