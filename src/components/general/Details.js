import React, { useState, useEffect } from 'react';
import './Details.css';
import { OutlineButton } from './OutlineButton';
import { useStateValue } from './State';
import { setDetails } from '../../store';
import { Input } from './Input';
import { Redirect } from 'react-router';
import { Select } from './Select';
import { LoadingSpinner } from './LoadingSpinner';
import { getAddresses } from '../../utils/get-addresses';

const postcodeRegex = /^(GIR ?0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPS-UW]) ?[0-9][ABD-HJLNP-UW-Z]{2})$/;

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
  const [isLoadingAddresses, setIsLoadingAddresses] = useState(true);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const postcode = detailsState.postcode.toUpperCase();
    if (postcodeRegex.test(postcode)) {
      setIsLoadingAddresses(true);
      getAddresses(postcode, controller.signal).then(retrievedAddresses => {
        setAddresses(retrievedAddresses);
        setIsLoadingAddresses(false);
      });
    }
    return () => {
      if (!controller.signal.aborted) {
        controller.abort();
      }
    };
  }, [detailsState.postcode]);

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
      Address
      <Select className='c-details__input'
        onChange={(value) => setNewValue('addressLine1', value)}
        options={(addresses || []).map(address => ({
          label: address,
          value: address
        }))}
        value={detailsState.addressLine1}
      />
      {
        isLoadingAddresses
        && <div className='c-details__spinner'>
          <LoadingSpinner />
        </div>
      }
    </label>

    <div className={`c-details__update-btn${floatingButton ? ' c-details__update-btn__floating' : ''}`}>
      <OutlineButton onClick={updateDetails} buttonColor={buttonColor}>
        {buttonText}
      </OutlineButton>
    </div>
  </div>;
}
