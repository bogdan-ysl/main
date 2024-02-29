import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = 'Costas';
  const lastName = 'Bogdan';
  const group = 'CR-221';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Salut, sunt {firstName} {lastName}.
        </p>
        <p>Grupa: {group}</p>
        {/* Alte informații personale sau modificări pot fi adăugate aici */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
