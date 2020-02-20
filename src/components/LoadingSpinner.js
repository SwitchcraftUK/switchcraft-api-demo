import React from 'react';

export const LoadingSpinner = ({
  children
}) => <div>{
  children || 'Loading...'
}</div>;
