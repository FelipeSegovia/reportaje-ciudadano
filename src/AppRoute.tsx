import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { LoginPage } from './features/auth/LoginPage';
import { RegisterPage } from './features/auth/RegisterPage';
import { AuthLayout } from './features/auth/AuthLayout';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
