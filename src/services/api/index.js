import Axios from 'axios';

const PRODUCTION_BASE_URL = 'https://fathomless-anchorage-00730.herokuapp.com';
const DEV_BASE_URL = 'http://localhost:5000';

const baseURL = process.env.NODE_ENV === 'production' ? PRODUCTION_BASE_URL : DEV_BASE_URL;

const axios = Axios.create({
  baseURL
});

const API = {
  async signIn(body, config = {}) {
    return axios.post('/api/v1/login', body, config);
  }
};

export { API };
