import React from 'react';
import './Loading.css';
import { LoadingSpinner } from './LoadingSpinner';


export const Loading = ({
  children
}) => <div className='c-loading'>
  <LoadingSpinner className='c-loading__spinner' />
  {children || 'Loading...'}
</div>;

