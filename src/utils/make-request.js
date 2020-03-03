export const makeRequest = async (
  data,
  url,
  method = 'POST'
) => {
  const request = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'switchcraft-test-key'
    },
    body: JSON.stringify(data),
    method
  });
  const result = await request.json();
  if (request.status === 400 || request.status === 500) {
    throw result;
  }
  return result;
};
