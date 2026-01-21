export type User = {
    id: string;
    email: string;
}

export type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
}