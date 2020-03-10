import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Demo } from './demo/Demo';
import { Intro } from './intro/Intro';
import { initAppState, appReducer } from '../store';
import { StateProvider } from './general/State';

export const App = () => (
  <StateProvider initialState={initAppState()} reducer={appReducer}>
    <Router>
      <Switch>
        <Route path='/demo' component={Demo} />
        <Route path='/' component={Intro} />
      </Switch>
    </Router>
  </StateProvider>
);
