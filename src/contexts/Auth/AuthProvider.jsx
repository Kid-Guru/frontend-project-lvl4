import { createContext, useEffect, useState } from 'react';
import { authService } from '../../services/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  const signIn = async (login, password) => {
    return authService.signin(login, password).then(() => setIsAuth(true));
  };

  const signOut = async () => {
    return authService.signout().then(() => setIsAuth(false));
  };

  useEffect(async () => {
    const isAuth = await authService.checkAuth();
    setIsAuth(isAuth);
    setIsAuthChecked(true);
  }, []);

  if (!isAuthChecked) return null;

  return <AuthContext.Provider value={{ isAuth, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
