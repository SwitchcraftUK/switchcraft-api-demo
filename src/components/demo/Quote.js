import React from 'react';
import './Quote.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../general/State';

export const Quote = () => {
  const [{ quote }] = useStateValue();
  const showSwitchButton = quote && quote.tariffs && quote.tariffs.length > 0;
  const cheapestQuote = showSwitchButton && quote.tariffs[0];
  return (
    <div className='c-quote'>
      <Link className='c-quote__switch-user' to='demo/switch'>
        Switch energy and save £{cheapestQuote.annualSaving.toFixed(0)} a year
      </Link>
    </div>
  );
};
