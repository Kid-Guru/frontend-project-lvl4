import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../../contexts/Auth';
import { ChatPage } from '../../pages/ChatPage';
import { LoginPage } from '../../pages/LoginPage';
import { NotFound } from '../../pages/NotFound';
import { RequireAuth } from './RequireAuth';

const Routing = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <RequireAuth>
                <ChatPage />
              </RequireAuth>
            }
          />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export { Routing };
