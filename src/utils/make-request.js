export const makeRequest = async (
  data,
  url,
  method = 'POST',
  signal,
) => {
  try {
    const request = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'switchcraft-test-key'
      },
      body: JSON.stringify(data),
      method,
      signal
    });
    const result = await request.json();
    if (request.status !== 200) {
      throw result;
    }
    return result;
  } catch (err) {
    if (err.name === 'AbortError') {
      return null;
    }
    throw err;
  }
};
