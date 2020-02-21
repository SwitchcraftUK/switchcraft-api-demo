import React from 'react';
import './App.css';
import { TopBar } from './TopBar';
import { Transcations } from './Transactions';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { SwitchUser } from './SwitchUser';

export const App = () => {
  return (
    <Router>
      <div className='c-app'>
        <TopBar />
        <div className='c-app__inner'>
          <Switch>
            <Route path='/switch'>
              <SwitchUser />
            </Route>
            <Route path='/'>
              <Transcations />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
