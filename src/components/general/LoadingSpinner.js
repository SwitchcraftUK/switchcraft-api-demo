import React from 'react';
import './LoadingSpinner.css';

export const LoadingSpinner = ({
  children
}) => <div className='c-loading'>
  <div className='c-loading__spinner'></div>
  {children || 'Loading...'}
</div>;

