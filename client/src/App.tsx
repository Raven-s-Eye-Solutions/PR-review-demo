import React from 'react';
import './App.css';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/404' component={NotFound} />
        <Redirect to='/404' />
      </Switch>
    </Router>
  );
}

export default App;
