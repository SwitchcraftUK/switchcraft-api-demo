import React from 'react';
import { userDetails } from '../data/user-details';
import './TopBar.css';
import { BurgerIcon } from './BurgerIcon';
import { Link } from 'react-router-dom';

export const TopBar = () => {
  return (
    <header className='c-top-bar'>
      <h3>Switchcraft Bank Account</h3>
      <p>
        {userDetails.bankDetails.sortCode} {userDetails.bankDetails.accountNumber}
      </p>
      <Link
        to='/details'
        className='c-top-bar__burger-icon'>
        <BurgerIcon />
      </Link>
    </header>
  );
};
