import React from 'react';
import './Demo.css';
import { TopBar } from './TopBar';
import { Transcations } from './Transactions';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { SwitchUser } from './SwitchUser';
import { Details } from '../general/Details';

export const Demo = ({
  match
}) =>
  <Router>
    <div className='c-demo'>
      <div className='c-demo__inner'>
        <TopBar />
        <div>
          <Switch>
            <Route path={`${match.path}/switch`}>
              <SwitchUser />
            </Route>
            <Route path={`${match.path}/details`}>
              <Details />
            </Route>
            <Route path={`${match.path}/`}>
              <Transcations />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  </Router>;
