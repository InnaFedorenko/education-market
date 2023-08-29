import Auth from '../utils/auth';
import { useState, useEffect } from 'react';
import { useLogin } from '../utils/LoginContext';
import { LOGOUT } from '../utils/actions';
import { useNavigate, Navigate } from 'react-router-dom';
export default function Logout(){
  const [redirectState, setRedirectState] = useState(false);
  const [state, dispatch] = useLogin();
  const navigate = useNavigate();
  useEffect( () => {
    // deletes the token in storage
    Auth.deleteToken();
    // updates the state for the application
    dispatch({
      type: LOGOUT
    });
    
    // if you are using the imperative navigate hook, then you do not need redirectState or the Navigate component
    // go back to the homepage
    navigate("/");

    // // alternate version, use the redirect component below and comment out navigate("/");
    // setRedirectState(true);
  }, []);
  return (
    <>
      {/* if you are using the imperative navigate hook, then you do not need redirectState or the Navigate component */}
      {redirectState ? (
        <Navigate to="/"/>
      ) : (
        <></>
      )}
      Logout
    </>
  );
}