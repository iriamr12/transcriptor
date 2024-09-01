import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const translator = (text) => {
    return text
      .toLowerCase()
      .split('')
      .map(char => {
        const code = char.charCodeAt(0);
        if (code >= 97 && code <= 122) {
          return code - 96;
        }
        return ''; 
      })
      .filter(char => char !== '')
      .join(' ');
  }

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);
    setTranslatedText(translator(text));
  }

  return (
    <div className="App">
      <div className="container">
        <input 
          type="text" 
          value={inputText} 
          onChange={handleInputChange} 
          placeholder="Type your message here"
          className="input-box"
        />
        <p className="translated-text">
        <span>{translatedText}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
