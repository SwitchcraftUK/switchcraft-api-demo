import React from 'react';
import './Input.css';

export const Input = ({
  children,
  className,
  type = 'text',
  placeholder,
  onChange,
  value
}) => (
  <input
    className={`${(className || '')} c-input`}
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={(event) => onChange(event.target.value)}>
    { children }
  </input>
);
