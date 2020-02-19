export const BASE_BACKEND_URL = process.env.REACT_APP_BASE_BACKEND_URL || 'http://localhost:3000';

export const API_VERSION = process.env.REACT_APP_API_VERSION || 'v1';

const BACKEND_URL = `${BASE_BACKEND_URL}/api/${API_VERSION}`;

export const ENERGY_BACKEND_URL = `${BACKEND_URL}/energy`;

export const ENERGY_QUOTE_BACKEND_URL = `${ENERGY_BACKEND_URL}/quote`;

export const ENERGY_SWITCH_BACKEND_URL = `${ENERGY_BACKEND_URL}/switch`;
