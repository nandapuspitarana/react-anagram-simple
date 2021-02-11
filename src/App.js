import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function textAnagram(array) {
  var organized = {};
  for (var i = 0; i < array.length; i++) {
    var word = array[i].split('').sort().join('');
    if (!organized.hasOwnProperty(word)) {
      organized[word] = [];
    }
    organized[word].push(array[i]);
  }
  return JSON.stringify(organized, null, '\t');
}

function InputText(e, callback) {
  let inputValue = e.target.value 
  let arrayText = inputValue.split(/[ ,]+/);

  return callback(arrayText)
}

function App() {
  const [anagram, setAnagram] = useState([
    'kmno',
    'okmn',
    'omkn',
    'dell',
    'ledl',
    'ok',
    'ko',
  ]);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <label className='my-4' htmlFor='anagram'>
          anagram :
        </label>
        <textarea
          className='my-4'
          type='text'
          rows='4'
          cols='50'
          value={anagram.join(', ')}
          onChange={(e) => InputText(e, setAnagram)}
        />
        <pre style={{ marginLeft: '-130px' }}>
          {textAnagram(anagram)}
        </pre>
      </header>
    </div>
  );
}

export default App;
