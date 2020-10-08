import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { MoviesList } from './movies/MoviesList';

function App() {
  return (
    <div className="App">
      <MoviesList />
    </div>
  );
}

export default App;
