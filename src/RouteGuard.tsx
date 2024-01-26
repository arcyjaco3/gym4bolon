import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface RouteGuardProps {
  children: ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const user = sessionStorage.getItem('user'); 

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default RouteGuard;
