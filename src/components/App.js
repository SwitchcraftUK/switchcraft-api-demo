import React from 'react';
import './App.css';
import { TopBar } from './TopBar';
import { Transcations } from './Transactions';

export const App = () => {
  return (
    <div className='c-app'>
      <TopBar />
      <div className='c-app__inner'>
        <Transcations />
      </div>
    </div>
  );
};
