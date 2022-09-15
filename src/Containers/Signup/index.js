import React from 'react'
import { useDispatch } from 'react-redux';
import SignupView from '../../Components/ViewComponents/SignupView'
import { SIGNUP_REQUEST} from './reducer';


const Signup = () => {

    const dispatch = useDispatch();

    const handleSubmit = (formValues) => {
        dispatch({type: SIGNUP_REQUEST, payload: formValues});
    }



  return (
    <SignupView handleSubmit={handleSubmit} />
  )
}

export default Signup