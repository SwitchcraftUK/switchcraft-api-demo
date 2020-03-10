import React from 'react';
import './Button.css';

export const Button = ({
  className,
  onClick,
  children
}) => (
  <button className={`c-btn${className ? ` ${className}` : '' }`}
    onClick={onClick}>
    {children}
  </button>
);
