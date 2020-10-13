import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { MoviesList } from './movies/MoviesList';
import { MovieDetail } from './movies/MovieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/details">
            <MovieDetail />
          </Route>
        </Switch>
        <Switch>
          <Route path="/">
            <MoviesList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
