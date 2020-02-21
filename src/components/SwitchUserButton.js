import React, { useState } from 'react';
import { ENERGY_SWITCH_BACKEND_URL } from '../config';
import { LoadingSpinner } from './LoadingSpinner';
import { userDetails } from '../data/user-details';
import './SwitchUserButton.css'
import { OutlineButton } from './OutlineButton';
import { makeRequest } from '../utils/make-request';

const postSwitchUser = (userId) => {
  const data = {
    userId,
    tariffId: '1a47e5b80cdbd80006c542a1',
    ...userDetails.identity,
    bankDetails: userDetails.bankDetails
  };
  return makeRequest(data, ENERGY_SWITCH_BACKEND_URL);
};

export const SwitchUserButton = ({
  topTariff,
  userId
}) => {
  const [switchState, setSwitchState] = useState(null);
  const [isLoading, setIsLoadingState] = useState(false);

  const switchUserClicked = async () => {
    setIsLoadingState(true);
    const switchResponse = await postSwitchUser(userId);
    setSwitchState(switchResponse);
    setIsLoadingState(false);
  };

  return (
    <div className='c-switch-user-button'>
      {
        isLoading
          ? <LoadingSpinner>Switching your energy...</LoadingSpinner>
          : (
            switchState
          )
            ? (
              <div className='c-switch-user-button__result'>
                {
                  switchState.success
                    ? 'Switch successful'
                    : switchState.message
                }
              </div>
            )
            : (
              <div className='c-switch-user-button__btn'>
                <OutlineButton onClick={switchUserClicked}>
                  Switch now and save £{ topTariff.annualSaving.toFixed(0) }
                </OutlineButton>
              </div>
            )
      }
    </div>
  );
};
