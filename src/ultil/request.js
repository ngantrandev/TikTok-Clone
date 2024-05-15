import axios from 'axios';

const request = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

const get = async (apiPath, params = {}) => {
  const res = await request.get(apiPath, params);
  return res.data;
};

export default request;

export { get };
