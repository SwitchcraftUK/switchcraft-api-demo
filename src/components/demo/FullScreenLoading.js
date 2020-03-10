import React from 'react';
import './FullScreenLoading.css';
import { LoadingSpinner } from '../general/LoadingSpinner';

export const FullScreenLoading = () => (
  <div className='c-full-screen-loading'>
    <LoadingSpinner>
      Getting you a quote...
    </LoadingSpinner>
  </div>
);
