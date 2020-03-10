export const SET_DETAILS = 'SET_DETAILS';
export const setDetails = (address, preferences) => ({
  address,
  preferences,
  type: SET_DETAILS
});

export const SET_QUOTE = 'SET_QUOTE';
export const setQuote = (quote) => ({
  quote,
  type: SET_QUOTE
});
