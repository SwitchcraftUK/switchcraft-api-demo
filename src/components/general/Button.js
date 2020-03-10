import React from 'react';
import './Button.css';

export const Button = ({
  onClick,
  children
}) => (
  <button className='c-btn' onClick={onClick}>
    {children}
  </button>
);
