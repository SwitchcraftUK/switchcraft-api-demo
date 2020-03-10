import React, { useState, useEffect } from 'react';
import { ENERGY_QUOTE_BACKEND_URL } from '../../config';
import { LoadingSpinner } from '../general/LoadingSpinner';
import './Quote.css';
import { makeRequest } from '../../utils/make-request';
import { Link } from 'react-router-dom';
import { useStateValue } from '../general/State';
import { setQuote } from '../../store';

const getQuote = async (
  address,
  preferences
) => {
  const data = {
    hasUserAcceptedTermsAndConditions: true,
    address
  };
  const result = await makeRequest(data, ENERGY_QUOTE_BACKEND_URL);
  if (preferences && preferences.warmHomeDiscount) {
    return {
      ...result,
      tariffs: result.tariffs.filter(tariff => tariff.hasWarmHomeDiscount)
    };
  }
  return result;
};

const QuoteError = ({ errorMessage }) => (
  <div className='c-quote__error'>{ errorMessage }</div>
);

export const Quote = () => {
  const [{ address, preferences }] = useStateValue();
  const [{ quote }, dispatch] = useStateValue();
  const [isLoading, setIsLoadingState] = useState(false);
  const [errorState, setErrorState] = useState(null);

  const getQuoteResult = async () => {
    setIsLoadingState(true);
    try {
      const quote = await getQuote(
        address,
        preferences
      );
      dispatch(setQuote(quote));
    } catch (err) {
      setErrorState(err.message);
    }
    setIsLoadingState(false);
  };

  useEffect(() => {
    getQuoteResult();
    // eslint-disable-next-line
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
