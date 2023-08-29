import { useEffect } from 'react';
import { useLogin } from '../utils/LoginContext';
import { LOGIN, LOGOUT } from '../utils/actions';
import Auth from '../utils/auth';

// this special component is only used to dispatch an update to the login context should a valid token be discovered in localStorage
// otherwise, we will clear out the login and localstorage
export default function LoginCheck(props) {
  const [state, dispatch] = useLogin();
  useEffect( () => {
    if(props.login){  
      // same as localStorage.setItem('user_token', props.token);
      Auth.setToken(props.token);
      // add missing data based on token loaded from localstorage
      dispatch({type: LOGIN, payload: {
        token: props.token,
        user: props.user
      }});
    }
    else{
      // removes invalid token
      // same as localStorage.removeItem('user_token');
      Auth.deleteToken();
      // logout
      dispatch({type: LOGOUT});
    }
  }, []);
  return (<></>);
}