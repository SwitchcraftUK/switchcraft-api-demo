import React, { useState } from 'react';
import './Details.css';
import { OutlineButton } from './OutlineButton';
import { useStateValue } from './State';
import { setAddress } from '../store';
import { Input } from './Input';

export const Details = () => {
  const [{ address }, dispatch] = useStateValue();

  const [detailsState, setDetailsState] = useState({
    postcode: address.postcode,
    addressLine1: address.addressLine1
  });

  const setNewValue = (target, value) => {
    setDetailsState({
      ...detailsState,
      [target]: value
    });
  };

  const updateDetails = () => {
    dispatch(setAddress(detailsState));
    window.history.back();
  };

  return <div className='c-details'>
    <label className='c-details__field'>
      Postcode
      <Input className='c-details__input'
        onChange={(value) => setNewValue('postcode', value)}
        type='text'
        value={detailsState.postcode} />
    </label>
    <label className='c-details__field'>
      Address Line 1
      <Input className='c-details__input'
        onChange={(value) => setNewValue('addressLine1', value)}
        type='text'
        value={detailsState.addressLine1} />
    </label>

    <div className='c-details__update-btn'>
      <OutlineButton onClick={updateDetails}>
        Update details
      </OutlineButton>
    </div>
  </div>;
}
