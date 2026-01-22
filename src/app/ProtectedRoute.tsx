import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

import { useAuth } from "../features/auth/AuthContext";

type ProtectedRouteProps = {
  children: ReactNode;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isAuthReady } = useAuth();

  if (!isAuthReady) {
    return null;
  }
  
  if (!isAuthenticated) {
    // Not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  // Logged in → allow access
  return <>{children}</>;
}
