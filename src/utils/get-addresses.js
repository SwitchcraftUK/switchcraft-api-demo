import { GET_ADDRESSES_BACKEND_URL } from '../config';
import { makeRequest } from './make-request';

export const getAddresses = async (
  postcode,
  signal
) => {
  const data = {
    arguments: [postcode]
  };
  const result = await makeRequest(
    data, GET_ADDRESSES_BACKEND_URL, 'POST', signal
  );
  return result && result.map(addresses => {
    const fields = [
      'orgn', 'subb', 'bnam', 'bnum', 'thor'
    ];
    return Object.entries(addresses)
      .filter(([key, value]) => fields.includes(key) && Boolean(value))
      .map(([, value]) => value)
      .join(' ');
  });
};
