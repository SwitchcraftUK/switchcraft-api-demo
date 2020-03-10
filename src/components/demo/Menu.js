import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export const Menu = ({
  itemClicked
}) => (
  <div className='c-menu'>
    <Link onClick={itemClicked} className='c-menu__item'
      to='/demo/'>
        Transactions
    </Link>
    <Link onClick={itemClicked} className='c-menu__item'
      to='/demo/details'>
        Change Address
    </Link>
  </div>
);
