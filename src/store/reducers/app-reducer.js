import { SET_DETAILS, SET_QUOTE, SET_QUOTE_ERROR } from '../actions';

const switchcraftApiDemoStateKey = 'swc-api-demo-1.0.0';

export const initAppState = () => {
  const storedState = JSON.parse(localStorage.getItem(switchcraftApiDemoStateKey));
  return storedState || {
    address: {
      addressLine1: '192a Kingsland Road',
      postcode: 'E28EB'
    },
    identity: {
      title: 'Mr',
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@email.co.uk',
      phoneNumber: '07950450297',
      dateOfBirth: '1989-05-25',
      monthsAtCurrentAddress: 50
    },
    bankDetails: {
      accountNumber: '14457846',
      sortCode: '40-47-84'
    },
    quoteError: null
  };
};

const innerAppReducer = (state, action) => {
  switch (action.type) {
    case SET_DETAILS:
      return {
        ...state,
        address: action.address,
        quote: null
      };

    case SET_QUOTE:
      return {
        ...state,
        quote: action.quote,
        quoteError: null
      };

    case SET_QUOTE_ERROR:
      return {
        ...state,
        quoteError: action.error
      };

    default:
      return state;
  }
};

export const appReducer = (state, action) => {
  const newState = innerAppReducer(state, action);
  localStorage.setItem(
    switchcraftApiDemoStateKey,
    JSON.stringify({
      address: newState.address,
      identity: newState.identity,
      bankDetails: newState.bankDetails
    })
  );
  return newState;
};
