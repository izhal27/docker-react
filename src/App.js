import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#61dafb', textDecoration: 'none' }}
          >
            React
          </a>
        </h1>
        <h3>A JavaScript library for building user interfaces</h3>
        <p>Hello World!!!</p>
      </header>
    </div>
  );
}

export default App;
