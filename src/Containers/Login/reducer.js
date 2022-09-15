import { SET_ACCOUNT_GUEST } from "../App/reducer"

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_REQUEST_FAILED = "LOGIN_REQUEST_FAILED"
export const LOGIN_REQUEST_SUCCES = "LOGIN_REQUEST_SUCCES"

export const FAKE_BACKEND_AUTHENTICATION ="FAKE_BACKEND_AUTHENTICATION"

export const REDIRECT_AFTER_LOGIN = "REDIRECT_AFTER_LOGIN"
export const REDIRECT_SUCCES = "REDIRECT_SUCCES"
export const INITIAL_STATE = "INITIAL_STATE"

const initialState={
    
    account: {
        username: "",
        password: "",
    },

   
    
    isLoading: false,
    success: false,
    redirect: false,
    error: "",

}

export default (state = initialState, action) => {
    switch (action.type){
        case LOGIN_REQUEST:
            return {...state, account: action.payload.account, isLoading: true, error: "", redirect: false}
        case LOGIN_REQUEST_SUCCES:
            return {account: {username: "", password: ""}, isLoading: false, error: "", success: true, redirect: false}
        case LOGIN_REQUEST_FAILED:
                return {...state, isLoading: false, error: action.payload, success: false, redirect: false}
        case REDIRECT_AFTER_LOGIN:
                return {...state, isLoading: false, error: "", redirect: true}

        case SET_ACCOUNT_GUEST:
                return {...initialState}
        

        case FAKE_BACKEND_AUTHENTICATION:
            return {...state, isLoading: true, success: false, error: "", redirect: false}
        case INITIAL_STATE:
            return {...state, success: false, error: ""}
                

        default:
            return {...state}
    }
}
