const tokenName = 'user_token';
export default {
  getToken: () => localStorage.getItem(tokenName),
  setToken: (token) => localStorage.setItem(tokenName, token),
  deleteToken: () => localStorage.removeItem(tokenName)
}