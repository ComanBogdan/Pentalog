export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_REQUEST_FAILED = "LOGIN_REQUEST_FAILED"
export const LOGIN_REQUEST_SUCCES = "LOGIN_REQUEST_SUCCES"

export const FAKE_BACKEND_AUTHENTICATION ="FAKE_BACKEND_AUTHENTICATION"

const initialState={
    
    account: {
        username: "",
        password: "",
    },

   
    
    isLoading: false,
    success: false,
    error: "",

}

export default (state = initialState, action) => {

    switch (action.type){
        case LOGIN_REQUEST:
            return {...state, account: action.payload.account, isLoading: true, error: ""}
        case LOGIN_REQUEST_SUCCES:
            return {account: {username: "", password: ""}, isLoading: false, error: "", success: true}
        case LOGIN_REQUEST_FAILED:
                return {...state, isLoading: false, error: action.payload, success: false}

        case FAKE_BACKEND_AUTHENTICATION:
            return {...state, isLoading: true, success: false, error: ""}
                

        default:
            return {...state}
    }
}
