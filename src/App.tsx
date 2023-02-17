import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './components/contador';
import { TextUpdate } from './components/textUpdate';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contador />
        <TextUpdate />
      </header>
    </div>
  );
}

export default App;
// 