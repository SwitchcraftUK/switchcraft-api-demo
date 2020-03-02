import React, { useState } from 'react';
import { ENERGY_SWITCH_BACKEND_URL } from '../config';
import { LoadingSpinner } from './LoadingSpinner';
import './SwitchUserButton.css'
import { OutlineButton } from './OutlineButton';
import { makeRequest } from '../utils/make-request';
import { useStateValue } from './State';

const postSwitchUser = (
  userId,
  identity,
  bankDetails
) => {
  const data = {
    userId,
    ...identity,
    bankDetails
  };
  return makeRequest(data, ENERGY_SWITCH_BACKEND_URL);
};

export const SwitchUserButton = ({
  topTariff,
  userId
}) => {
  const [{ identity, bankDetails }] = useStateValue();
  const [switchState, setSwitchState] = useState(null);
  const [errorState, setErrorState] = useState(null);
  const [isLoading, setIsLoadingState] = useState(false);

  const switchUserClicked = async () => {
    setIsLoadingState(true);
    try {
      const switchResponse = await postSwitchUser(
        userId, identity, bankDetails
      );
      setSwitchState(switchResponse);
    } catch (error) {
      setErrorState(error.message);
    }
    setIsLoadingState(false);
  };

  return (
    <div className='c-switch-user-button'>
      {
        (switchState || errorState || isLoading)
          ? (
            <div className='c-switch-user-button__result'>
              {
                isLoading
                  ? <LoadingSpinner>Switching your energy...</LoadingSpinner>
                  : !errorState ? 'Switch successful' : errorState
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
