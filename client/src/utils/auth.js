import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    console.log('getProfile');
    return decode(this.getToken());
  }

  loggedIn() {
    console.log('loggedIn');
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    console.log('isTokenExpired');
    const decoded = decode(token);
    console.log({
      "decodedExp": decoded.exp * 1000,
      "DataNow": Date.now()
    });
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  getToken() {
    console.log('getToken');
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    console.log('login');
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    console.log('logout');
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();
