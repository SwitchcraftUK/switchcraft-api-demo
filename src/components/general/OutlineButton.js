import React from 'react';
import './Button.css';
import './OutlineButton.css';

export const OutlineButton = ({
  onClick,
  children,
  buttonColor
}) => (
  <button className='c-btn c-outline-btn'
    onClick={onClick}
    {
      ...(buttonColor ? {
        style: {
          backgroundColor: buttonColor
        }
      } : {})
    }>
    {children}
  </button>
);
