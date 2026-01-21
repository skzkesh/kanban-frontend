import { createBrowserRouter, Navigate } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";

/**
 * Public routes:
 *  - Accessible without authentication
 */
const publicRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
];

/**
 * Protected routes:
 *  - Will later be wrapped with auth guard
 */
const protectedRoutes = [
  {
    path: "/dashboard",
    element: <DashboardPage />, // later: <ProtectedRoute><DashboardPage /></ProtectedRoute>
  },
];

/**
 * Main router configuration
 */
export const router = createBrowserRouter([
  // Default route
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },

  // Public routes
  ...publicRoutes,

  // Protected routes
  ...protectedRoutes,

  // Fallback route (not found)
  {
    path: "*",
    element: <div className="p-8 text-xl">404 - Page Not Found</div>,
  },
]);
