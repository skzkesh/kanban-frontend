import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";

import { ProtectedRoute } from "./ProtectedRoute";
import { AuthProvider } from "../features/auth/AuthContext";

export const router = createBrowserRouter([
  {
    // ROOT LAYOUT — router exists here
    element: (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    ),
    children: [
      // Default route
      {
        path: "/",
        element: <Navigate to="/login" replace />,
      },

      // Public routes
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },

      // Protected route
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        ),
      },

      // Fallback
      {
        path: "*",
        element: <div className="p-8 text-xl">404 - Page Not Found</div>,
      },
    ],
  },
]);
