import React from 'react';
import { userDetails } from '../data/user-details';
import './TopBar.css';

export const TopBar = () => {
  return (
    <header className='c-top-bar'>
      <h3>Switchcraft Bank Account</h3>
      <p>
        {userDetails.bankDetails.sortCode} {userDetails.bankDetails.accountNumber}
      </p>
    </header>
  );
};
