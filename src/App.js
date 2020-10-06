import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>I like turtles</h1>
      <OtherComponent name="Mike" greeting="Yo" />
      <OtherComponent name="PepPep" />
    </div>
  );
}

function OtherComponent({ name, greeting = 'Hello' }) {
  return (
    <h1>
      {' '}
      {greeting} {name}
    </h1>
  );
}

export default App;
