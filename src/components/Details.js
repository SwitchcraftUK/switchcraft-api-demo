import React, { useState } from 'react';
import './Details.css';
import { userDetails } from '../data/user-details';
import { OutlineButton } from './OutlineButton';

export const Details = () => {
  const [detailsState, setDetailsState] = useState({
    postcode: userDetails.address.postcode,
    addressLine1: userDetails.address.addressLine1
  });

  const setNewValue = (event) => {
    setDetailsState({
      ...detailsState,
      [event.target.name]: event.target.value
    });
  };

  const updateDetails = () => {
    userDetails.address = detailsState;
    window.history.back();
  };

  return <div className='c-details'>
    <label className='c-details__field'>
      Postcode
      <input className='c-details__input'
        name='postcode'
        onChange={setNewValue}
        type='text'
        value={detailsState.postcode} />
    </label>
    <label className='c-details__field'>
      Address Line 1
      <input className='c-details__input'
        name='addressLine1'
        onChange={setNewValue}
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
