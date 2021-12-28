import { createContext, useEffect, useState } from 'react';
import { store } from '../../store';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  const signIn = async (login, password) => {
    return store.signIn(login, password).then((resp) => {
      setIsAuth(true);
      store.userName = resp.data.username;
    });
  };

  const signOut = async () => {
    return store.signOut().then(() => {
      setIsAuth(false);
      store.userName = '';
    });
  };

  useEffect(async () => {
    const isAuth = await store.checkAuth();
    setIsAuth(isAuth);
    setIsAuthChecked(true);
  }, []);

  if (!isAuthChecked) return null;

  return <AuthContext.Provider value={{ isAuth, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
