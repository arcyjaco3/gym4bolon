import React from 'react';
import { Navigate } from 'react-router-dom';

interface RequireAuthProps {
  children: React.ReactElement;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const user = sessionStorage.getItem('user');

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
