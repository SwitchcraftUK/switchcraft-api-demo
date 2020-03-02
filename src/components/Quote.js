import React, { useState } from 'react';
import { ENERGY_QUOTE_BACKEND_URL } from '../config';
import { LoadingSpinner } from './LoadingSpinner';
import './Quote.css';
import { Button } from './Button';
import { makeRequest } from '../utils/make-request';
import { Link } from 'react-router-dom';
import { useStateValue } from './State';
import { setQuote } from '../store';

const getQuote = (
  address
) => {
  const data = {
    hasUserAcceptedTermsAndConditions: true,
    address
  };
  return makeRequest(data, ENERGY_QUOTE_BACKEND_URL);
};

const QuoteError = ({ errorMessage }) => (
  <div className='c-quote__error'>{ errorMessage }</div>
);

export const Quote = () => {
  const [{ address }] = useStateValue();
  const [isLoading, setIsLoadingState] = useState(false);
  const [errorState, setErrorState] = useState(null);
  const [{ quote }, dispatch] = useStateValue();

  const getQuoteResult = async () => {
    setIsLoadingState(true);
    try {
      const quote = await getQuote(address);
      dispatch(setQuote(quote));
    } catch (err) {
      setErrorState(err.message);
    }
    setIsLoadingState(false);
  };

  const showSwitchButton = quote && quote.tariffs && quote.tariffs.length > 0;
  const cheapestQuote = showSwitchButton && quote.tariffs[0];
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
              errorState
                ? <QuoteError errorMessage={errorState} />
                : <Button onClick={getQuoteResult}>
                  <span className='c-quote__save-more'>Want to save money on your energy?</span>
                  <br />
                  Click here to find out how much you could save
                </Button>
            )
      }
    </div>
  );
};
