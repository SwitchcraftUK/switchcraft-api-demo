import React from 'react';
import './FullScreenLoading.css';
import { Loading } from '../general/Loading';

export const FullScreenLoading = () => (
  <div className='c-full-screen-loading'>
    <Loading>
      Getting you a quote...
    </Loading>
  </div>
);
