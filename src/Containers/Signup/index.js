import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SignupView from '../../Components/ViewComponents/SignupView'
import { SIGNUP_REQUEST, SIGNUP_REQUEST_FAILED, SIGNUP_REQUEST_SUCCES, UPDATE_ACCOUNT } from './reducer';

import { sendUserAccount } from '../../Api';

const Signup = () => {

    const dispatch = useDispatch();

    const handleSubmit = (formValues) => {
        
        // const {username, password, passwordConfirm} = formValues
        console.log(formValues);
        dispatch({type: SIGNUP_REQUEST, payload: formValues});



        // console.log(username)
        // console.log(password)
        // console.log(passwordConfirm)

        // if(password !== passwordConfirm)
        //     dispatch({type: SIGNUP_REQUEST_FAILED, payload: "password does not match"})
        // else
        // {
        //     dispatch({
        //         type: SIGNUP_REQUEST, 
        //         payload:{
        //             username,
        //             password,
        //         }   
        //     })


        // }


    }



  return (
    <SignupView handleSubmit={handleSubmit} />
  )
}

export default Signup