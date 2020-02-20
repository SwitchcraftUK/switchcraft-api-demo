import React, { useState } from 'react';
import { ENERGY_SWITCH_BACKEND_URL } from '../config';
import { LoadingSpinner } from './LoadingSpinner';
import { userDetails } from '../data/user-details';
import './SwitchUser.css'
import { Button } from './Button';

const postSwitchUser = async (userId) => {
  const data = {
    userId,
    tariffId: '1a47e5b80cdbd80006c542a1',
    ...userDetails.identity,
    bankDetails: userDetails.bankDetails
  };
  const result = (await fetch(ENERGY_SWITCH_BACKEND_URL, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    method: 'POST'
  })).json();
  return result;
};

export const SwitchUser = ({
  quoteState
}) => {
  const [switchState, setSwitchState] = useState(null);
  const [isLoading, setIsLoadingState] = useState(false);

  const switchUserClicked = async () => {
    setIsLoadingState(true);
    const switchResponse = await postSwitchUser(quoteState.userId);
    setSwitchState(switchResponse);
    setIsLoadingState(false);
  };

  const cheapestTariff = quoteState.tariffs[0];

  return (
    isLoading
      ? <LoadingSpinner>Switching your energy...</LoadingSpinner>
      : (
        switchState
      )
        ? (
          <div className='c-switch-user__result'>
            {
              switchState.success
                ? 'Switch successful'
                : 'Failed to switch'
            }
          </div>
        )
        : (
          <Button onClick={switchUserClicked}>
            Click here to switch to { cheapestTariff.supplierName } and save
            <br />
            <span className='c-switch-user__savings'>
              £{ cheapestTariff.annualSaving }
            </span>
          </Button>
        )
  );
};
