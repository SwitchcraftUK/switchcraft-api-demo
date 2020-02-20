import React, { useState } from 'react';
import { ENERGY_QUOTE_BACKEND_URL } from '../config';
import { SwitchUser } from './SwitchUser';
import { LoadingSpinner } from './LoadingSpinner';
import { userDetails } from '../data/user-details';
import './Quote.css';
import { Button } from './Button';

const getQuote = async () => {
  const data = {
    hasUserAcceptedTermsAndConditions: true,
    address: userDetails.address
  };
  const result = (await fetch(ENERGY_QUOTE_BACKEND_URL, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    method: 'POST'
  })).json();
  return result;
};

export const Quote = () => {
  const [quoteState, setQuoteState] = useState(null);
  const [isLoading, setIsLoadingState] = useState(false);

  const getQuoteClicked = async () => {
    setIsLoadingState(true);
    const quote = await getQuote();
    setQuoteState(quote);
    setIsLoadingState(false);
  };

  return (
    <div className='c-quote'>
      {
        isLoading
          ? <LoadingSpinner>Getting your quote...</LoadingSpinner>
          : (
            quoteState && quoteState.tariffs && quoteState.tariffs.length > 0
          )
            ? <SwitchUser quoteState={quoteState} />
            : (
              <Button onClick={getQuoteClicked}>
                <span className='c-quote__save-more'>Want to save money on your energy?</span>
                <br />
                Click here to find out how much you could save
              </Button>
            )
      }
    </div>
  );
};
