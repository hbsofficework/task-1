import React, { useState } from 'react';

function TextConverter() {
    const [inputText, setInputText] = useState('');
    const [convertedText, setConvertedText] = useState('');

    const handleTextChange = (event) => {
        setInputText(event.target.value);
    };

    const handleConvertClick = () => {
        setConvertedText(inputText.toUpperCase());
    };

    const handleConvertClickL = () => {
        setConvertedText(inputText.toLowerCase());
    };

    const handlecleartext = () => {
        setConvertedText('');
        setInputText('');
    };

    return (
        <div style={{ textAlign: 'center', backgroundColor: "##ffe7e7"}}>
            <textarea value={inputText} style={{"width": "500px", "height": "100px", marginTop: "20px"}} onChange={handleTextChange} />
            <br /> <br /> <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={handleConvertClick}>Convert to Uppercase</button>
            <button onClick={handleConvertClickL}>Convert to Lowercase</button>
            <button onClick={handlecleartext}>Clear Text</button>
            </div>
            <br /> <br /> <br />
            <p>{convertedText}</p>
        </div>
    );
}

export default TextConverter;