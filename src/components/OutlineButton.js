import React from 'react';
import './Button.css';
import './OutlineButton.css';

export const OutlineButton = ({
  onClick,
  children
}) => (
  <button className='c-btn c-outline-btn' onClick={onClick}>
    {children}
  </button>
);
