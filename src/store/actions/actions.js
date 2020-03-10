export const SET_DETAILS = 'SET_DETAILS';
export const setDetails = (address) => ({
  address,
  type: SET_DETAILS
});

export const SET_QUOTE = 'SET_QUOTE';
export const setQuote = (quote) => ({
  quote,
  type: SET_QUOTE
});

export const SET_QUOTE_ERROR = 'SET_QUOTE_ERROR';
export const setQuoteError = (error) => ({
  error,
  type: SET_QUOTE_ERROR
});
