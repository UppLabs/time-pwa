import React from 'react';
import logo from './logo.svg';
import './App.css';
import dayjs from 'dayjs';

function App() {

  const renderTime = () => {
    return <h3>
      {dayjs().format('YYYY-MM-DD hh:mm:ss A')}
    </h3>
  }
  return (
    <div className="App">
      <header className="App-header">
        {renderTime()}
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
