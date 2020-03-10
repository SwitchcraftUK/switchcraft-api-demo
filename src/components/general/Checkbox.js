import React from 'react';

export const Checkbox = ({
  className,
  onChange,
  value
}) => (
  <input
    className={`${(className || '')}`}
    type='checkbox'
    checked={value}
    onChange={(event) => onChange(event.target.checked)} />
);
