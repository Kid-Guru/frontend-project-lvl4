import { API } from '../api';

const AUTH_KEY = 'AUTH_KEY';

const authService = {
  async signin(username, password) {
    const responce = await API.signIn({ username, password });

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
