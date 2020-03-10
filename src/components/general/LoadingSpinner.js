import React from 'react';
import './LoadingSpinner.css';

export const LoadingSpinner = ({
  children
}) => <div className='c-loading'>{
  children || 'Loading...'
}</div>;
