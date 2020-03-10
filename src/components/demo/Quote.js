import React, { useState, useEffect } from 'react';
import { ENERGY_QUOTE_BACKEND_URL } from '../../config';
import { LoadingSpinner } from '../general/LoadingSpinner';
import './Quote.css';
import { makeRequest } from '../../utils/make-request';
import { Link } from 'react-router-dom';
import { useStateValue } from '../general/State';
import { setQuote } from '../../store';

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

  useEffect(() => {
    getQuoteResult()
  }, []);

  const showSwitchButton = quote && quote.tariffs && quote.tariffs.length > 0;
  const cheapestQuote = showSwitchButton && quote.tariffs[0];
  return (
    <div className={`c-quote${
      showSwitchButton ? ' c-quote--button-shown' : ''
    }`}>
      {
        isLoading
          ? <LoadingSpinner>Checking how much you could save...</LoadingSpinner>
          : showSwitchButton
            ? <Link className='c-quote__switch-user' to='demo/switch'>
              Switch energy and save £{cheapestQuote.annualSaving.toFixed(0)} a year
            </Link>
            : errorState && <QuoteError errorMessage={errorState} />
      }
    </div>
  );
};
