import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>I like turtles</h1>
      <OtherComponent />
      <OtherComponent />
    </div>
  );
}

function OtherComponent() {
  return <h1>Yep</h1>;
}

export default App;
