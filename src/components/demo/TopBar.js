import React from 'react';
import './TopBar.css';
import { BurgerIcon } from '../general/BurgerIcon';
import { Link } from 'react-router-dom';
import { useStateValue } from '../general/State';

export const TopBar = () => {
  const [{ bankDetails }] = useStateValue();
  return (
    <header className='c-top-bar'>
      <h3>Switchcraft Bank Account</h3>
      <p>
        {bankDetails.sortCode} {bankDetails.accountNumber}
      </p>
      <Link
        to='/demo/details'
        className='c-top-bar__burger-icon'>
        <BurgerIcon />
      </Link>
    </header>
  );
};
