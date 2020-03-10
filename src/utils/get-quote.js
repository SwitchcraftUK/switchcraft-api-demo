import { ENERGY_QUOTE_BACKEND_URL } from '../config';
import { makeRequest } from './make-request';

export const getQuote = async (
  address,
  signal
) => {
  const data = {
    hasUserAcceptedTermsAndConditions: true,
    address
  };
  const result = await makeRequest(
    data, ENERGY_QUOTE_BACKEND_URL, 'POST', signal
  );
  return result;
};
