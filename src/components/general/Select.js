import React from 'react';
import './Select.css';

export const Select = ({
  className,
  onChange,
  options,
  value
}) => (
  <select
    className={`${(className || '')} c-select`}
    value={value}
    onChange={(event) => onChange(event.target.value)}>
      {
        options.map((option) =>
          <option key={option.value} value={option.value}>{option.label}</option>
        )
      }
  </select>
);
