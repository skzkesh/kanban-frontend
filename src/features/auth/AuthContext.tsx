import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getToken, setToken, removeToken } from "../../services/tokenStorage";

type User = {
    id: string;
    email: string;
}

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

/**
 * Context
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Provider
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * On app load:
   *  - Read token from storage
   *  - Restore auth state if token exists
   */
  useEffect(() => {
    const token = getToken();

    if (token) {
      // In real app, you would fetch user profile here
      setUser({
        id: "1",
        email: "demo@kanban.com",
      });
      setIsAuthenticated(true);
    }
  }, []);

  /**
   * Login (simulated for now)
   */
  async function login(email: string, password: string) {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Fake token returned from backend
    const fakeToken = "fake-jwt-token";

    // Persist token
    setToken(fakeToken);

    // Set auth state
    setUser({
      id: "1",
      email,
    });
    setIsAuthenticated(true);

    // Redirect to dashboard
    navigate("/dashboard");
  }

  /**
   * Logout
   */
  function logout() {
    removeToken();
    setUser(null);
    setIsAuthenticated(false);

    // Redirect to login
    navigate("/login");
  }

  const value: AuthContextType = {
    user,
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Hook
 */
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}