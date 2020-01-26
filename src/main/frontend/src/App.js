import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useMessage } from './Hooks/UseMessage';

function App() {
  const [loading, message] = useMessage();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading? <p>The message is loading</p> : <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;
