import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../../pages/LoginPage/Login';
import { NotFound } from '../../pages/NotFound';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Routing };
