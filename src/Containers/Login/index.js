import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserAccounts } from '../../Api';
import LoginView from '../../Components/ViewComponents/LoginView'
import { SET_ACCOUNT_USERNAME } from '../App/reducer';
import { FAKE_BACKEND_AUTHENTICATION, LOGIN_REQUEST_FAILED, LOGIN_REQUEST_SUCCES } from './reducer';

const Login = () => {

  const dispatch = useDispatch();
  const state = useSelector((store) => store.signup)
  const {account} = state;

  const appState = useSelector((store) => store.app)
 


  const handleSubmit = ( formValues ) => {

    //REQUEST TO VERIFY
    dispatch({type: FAKE_BACKEND_AUTHENTICATION})
    fetchUserAccounts().then((resp) => {

      let found = false;
    
      resp.map((item) => {
      
        if(item.username.toLowerCase() === formValues.username.toLowerCase() && item.password === formValues.password)
        {
          found = true;
          console.log(item.username);
          dispatch({type: SET_ACCOUNT_USERNAME, payload: formValues.username})
          dispatch({type: LOGIN_REQUEST_SUCCES})
        }
          
      })
      if(found === false)
        dispatch({type: LOGIN_REQUEST_FAILED, payload: "Account not found"})
    }).catch((e) => {
      dispatch({type: LOGIN_REQUEST_FAILED, payload: e.message})
    });
  }


  
  

  return (
    <LoginView handleSubmit={handleSubmit}/>
  )
}

export default Login