import React, { useState } from 'react';
import './Details.css';
import { OutlineButton } from './OutlineButton';
import { useStateValue } from './State';
import { setDetails } from '../../store';
import { Input } from './Input';
import { Redirect } from 'react-router';

export const Details = ({
  buttonText = 'Update details',
  floatingButton = true,
  buttonColor
}) => {
  const [{ address }, dispatch] = useStateValue();

  const [detailsState, setDetailsState] = useState({
    postcode: address.postcode,
    addressLine1: address.addressLine1
  });
  const [
    updateDetailsClickedState,
    setUpdateDetailsClickedState
  ] = useState(false);

  const setNewValue = (target, value) => {
    setDetailsState({
      ...detailsState,
      [target]: value
    });
  };

  const updateDetails = () => {
    dispatch(setDetails(detailsState));
    setUpdateDetailsClickedState(true);
  };

  if (updateDetailsClickedState) {
    return <Redirect to='/demo' push={true} />;
  }

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

    <div className={`c-details__update-btn${floatingButton ? ' c-details__update-btn__floating' : ''}`}>
      <OutlineButton onClick={updateDetails} buttonColor={buttonColor}>
        {buttonText}
      </OutlineButton>
    </div>
  </div>;
}
