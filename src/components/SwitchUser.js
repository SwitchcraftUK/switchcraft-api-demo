import React from 'react';
import { EstimateSummary } from './EstimateSummary';
import { TopQuoteDetails } from './TopQuoteDetails';
import { SwitchUserButton } from './SwitchUserButton';
import { userDetails } from '../data/user-details';
import './SwitchUser.css';

export const SwitchUser = () => {
  const quoteState = JSON.parse(localStorage.getItem('quoteState'));
  const topTariff = quoteState.tariffs[0];

  return (
    <div className='c-switch-user'>
      <div className='c-switch-user__top-quote-text'>
        Your top quote for {userDetails.address.addressLine1}:
      </div>
      <TopQuoteDetails topTariff={topTariff} />
      <EstimateSummary estimate={quoteState.estimate} />
      <SwitchUserButton userId={quoteState.userId} topTariff={topTariff} />
    </div>
  );
};
