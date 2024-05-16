import axios from 'axios';

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const get = async (apiPath, params = {}) => {
  const res = await httpRequest.get(apiPath, params);
  return res.data;
};

export default httpRequest;

export { get };
