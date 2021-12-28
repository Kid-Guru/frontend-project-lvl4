import { configure, makeAutoObservable, runInAction } from 'mobx';
import { API } from '../services/api';
import { storage } from '../services/storage';

const AUTH = 'AUTH';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true
});

class Store {
  channels = [];

  currentChannelId = null;

  messages = [];

  userName = '';

  constructor() {
    makeAutoObservable(this);
  }

  async signIn(user, password) {
    const {
      data: { token, username }
    } = await API.signIn({ username: user, password });
    runInAction(() => {
      storage.set(AUTH, { token, username });
    });
  }

  async signOut() {
    storage.set(AUTH, {});
  }

  async checkAuth() {
    const { token, username } = storage.get(AUTH) || {};
    this.userName = username;
    return Boolean(token);
  }

  async getInitialData() {
    const { token } = storage.get(AUTH);
    const { data } = await API.data({ headers: { Authorization: `Bearer ${token}` } });
    runInAction(() => {
      this.channels = data.channels;
      this.currentChannelId = data.currentChannelId;
      this.messages = data.messages;
    });
  }

  get messagesList() {
    return this.messages
      .filter((m) => m.channelId === this.currentChannelId)
      .map((m) => ({ id: m.id, message: m.body, author: m.username, isOwn: m.username === this.userName }));
  }

  get currentChannelName() {
    return this.channels.find((c) => c.id === this.currentChannelId)?.name || '';
  }
}

export const store = new Store();
