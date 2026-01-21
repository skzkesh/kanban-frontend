const TOKEN_KEY = "kanban_token";

/**
 * Save access token to persistent storage
 */
export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

/**
 * Read access token from persistent storage
 */
export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

/**
 * Remove access token from persistent storage
 */
export function removeToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}
