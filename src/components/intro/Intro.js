import React from 'react';
import { Details } from '../general/Details'
import './Intro.css';
import { useStateValue } from '../general/State';

export const Intro = () => {
  const [{ quoteError }, dispatch] = useStateValue();

  return <div className='c-intro'>
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
      <Details buttonText='Start demo' floatingButton={false} buttonColor='#FFFFFF' />
    </div>
    {
      quoteError && <span className='c-intro__quote-error'>
        {quoteError}
        <br />
        Please try a different address
      </span>
    }
  </div>
};
