import axios from 'axios';

const AUTH_KEY = 'AUTH_KEY';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const authService = {
  async signin(username, password) {
    const responce = await axios.post('http://localhost:5000/api/v1/login', { username, password });

    localStorage.setItem(AUTH_KEY, responce.data.token);
    return responce;
  },

  async signout() {
    localStorage.setItem(AUTH_KEY, '');
  },

  async checkAuth() {
    const KEY = localStorage.getItem(AUTH_KEY);
    return !!KEY;
  }
};

export { authService };
