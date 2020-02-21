import React, { useState } from 'react';
import { ENERGY_QUOTE_BACKEND_URL } from '../config';
import { LoadingSpinner } from './LoadingSpinner';
import { userDetails } from '../data/user-details';
import './Quote.css';
import { Button } from './Button';
import { makeRequest } from '../utils/make-request';
import { Link } from 'react-router-dom';

const getQuote = () => {
  const data = {
    hasUserAcceptedTermsAndConditions: true,
    address: userDetails.address
  };
  return makeRequest(data, ENERGY_QUOTE_BACKEND_URL);
};

export const Quote = () => {
  const [quoteState, setQuoteState] = useState(null);
  const [isLoading, setIsLoadingState] = useState(false);

  const getQuoteResult = async () => {
    setIsLoadingState(true);
    const quote = await getQuote();
    setQuoteState(quote);
    localStorage.setItem('quoteState', JSON.stringify(quote));
    setIsLoadingState(false);
  };

  const showSwitchButton = quoteState && quoteState.tariffs && quoteState.tariffs.length > 0;
  const cheapestQuote = showSwitchButton && quoteState.tariffs[0];
  return (
    <div className={`c-quote${
      showSwitchButton ? ' c-quote__button-shown' : ''
    }`}>
      {
        isLoading
          ? <LoadingSpinner>Getting your quote...</LoadingSpinner>
          : showSwitchButton
            ? <Link className='c-quote__switch-user' to='/switch'>
              Switch my energy and save £{cheapestQuote.annualSaving.toFixed(0)}
            </Link>
            : (
              <Button onClick={getQuoteResult}>
                <span className='c-quote__save-more'>Want to save money on your energy?</span>
                <br />
                Click here to find out how much you could save
              </Button>
            )
      }
    </div>
  );
};
