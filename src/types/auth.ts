export type User = {
    id: string;
    email: string;
    name: string;
    createdAt: string;
}

export type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
}