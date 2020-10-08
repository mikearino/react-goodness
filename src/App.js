import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Counter } from './Counter';
import { Accordian } from './Accordian';
import { Input } from './Input';

function App() {
  return (
    <div className="App">
      <Input />
      <Counter />
      <Accordian />
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

OtherComponent.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.string.isRequired,
};

export default App;
