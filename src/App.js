import React from 'react';
import './App.css';
import {Quote} from './Quote';

export const App = () => {
  return (
    <div className="c-app">
      <header>
        <h3>Switchcraft API demo</h3>
        <Quote/>
      </header>
    </div>
  );
};
