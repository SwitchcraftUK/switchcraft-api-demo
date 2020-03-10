import React from 'react';
import { EstimateSummary } from './EstimateSummary';
import { TopQuoteDetails } from './TopQuoteDetails';
import { SwitchUserButton } from './SwitchUserButton';
import { useStateValue } from '../general/State';
import './SwitchUser.css';
import { Redirect } from 'react-router';

export const SwitchUser = () => {
  const [{ address, quote }] = useStateValue();
  if (!quote) {
    return <Redirect to='/' push={true} />;
  }
  const topTariff = quote.tariffs[0];

  return (
    <div className='c-switch-user'>
      <div className='c-switch-user__top-quote-text'>
        Your top quote for {address.addressLine1}:
      </div>
      <TopQuoteDetails topTariff={topTariff} />
      <EstimateSummary estimate={quote.estimate} />
      <SwitchUserButton userId={quote.userId} topTariff={topTariff} />
    </div>
  );
};
