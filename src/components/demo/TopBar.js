import React, { useState } from 'react';
import './TopBar.css';
import { BurgerIcon } from '../general/BurgerIcon';
import { useStateValue } from '../general/State';
import { Menu } from './Menu';
import { CloseIcon } from '../general/CloseIcon';

export const TopBar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [{ bankDetails }] = useStateValue();

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

  return (
    <header className='c-top-bar'>
      <h3 className='c-top-bar__title'>Switchcraft Bank Account</h3>
      <p className='c-top-bar__details'>
        {bankDetails.sortCode} {bankDetails.accountNumber}
      </p>
      <button className='c-top-bar__burger-icon'
        onClick={toggleMenu} >
          {
            isMenuVisible ? <CloseIcon /> : <BurgerIcon />
          }
      </button>
      {
        isMenuVisible && <Menu itemClicked={toggleMenu} />
      }
    </header>
  );
};
