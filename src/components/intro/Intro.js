import React from 'react';
import { Details } from '../general/Details'
import './Intro.css';

export const Intro = () => (
  <div className='c-intro'>
    <div className='c-intro__text-section'>
      <h2 className='c-intro__heading'>
        Welcome to the Switchcraft API demo
      </h2>
      <p>
        Enter your address to see an example of how you might
        use the Switchcraft API.
      </p>
    </div>
    <div className='c-intro__details'>
      <Details buttonText='Start demo' floatingButton={false} />
    </div>
  </div>
);
