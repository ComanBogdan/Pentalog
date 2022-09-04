export const SIGNUP_REQUEST = "SIGNUP_REQUEST"
export const SIGNUP_REQUEST_FAILED = "SIGNUP_REQUEST_FAILED"
export const SIGNUP_REQUEST_SUCCES = "SIGNUP_REQUEST_SUCCES"

export const UPDATE_ACCOUNT ="UPDATE_ACCOUNT"


const initialState={
    
    account: {
        username: "",
        password: "",
        passwordConfirm: "",
    },

   
    
    isLoading: false,
    success: false,
    error: "",

}

export default (state = initialState, action) => {

    switch (action.type){
        case SIGNUP_REQUEST:
            return {...state, isLoading: true, error: ""}
        case SIGNUP_REQUEST_SUCCES:
            return {account: {username: "", password: "", passwordConfirm: ""}, isLoading: false, error: "", success: true}
        case SIGNUP_REQUEST_FAILED:
                return {...state, isLoading: false, error: action.payload, success: false}

        
            

        default:
            return {...state}
    }


}