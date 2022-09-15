import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserAccounts } from '../../Api';
import LoginView from '../../Components/ViewComponents/LoginView'
import { SET_ACCOUNT_USERNAME } from '../App/reducer';
import { FAKE_BACKEND_AUTHENTICATION, LOGIN_REQUEST, LOGIN_REQUEST_FAILED, LOGIN_REQUEST_SUCCES } from './reducer';

const Login = () => {

  const dispatch = useDispatch();
  const state = useSelector((store) => store.signup)
  const {account} = state;

  const appState = useSelector((store) => store.app)
 


  const handleSubmit = ( formValues ) => {
    console.log(formValues)
    dispatch({type: LOGIN_REQUEST, payload: formValues});
  }


  
  

  return (
    <LoginView handleSubmit={handleSubmit}/>
  )
}

export default Login