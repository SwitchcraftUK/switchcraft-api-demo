import React from 'react';
import './LoadingSpinner.css';

export const LoadingSpinner = ({
  className
}) =>
  <div className={`c-loading-spinner${className ? ` ${className}` : ''}`}></div>

