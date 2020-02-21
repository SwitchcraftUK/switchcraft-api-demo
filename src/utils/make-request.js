export const makeRequest = async (
  data,
  url,
  method = 'POST'
) => {
  const result = (await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'switchcraft-test-key'
    },
    body: JSON.stringify(data),
    method
  })).json();
  return result;
};
