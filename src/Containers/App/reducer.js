export const SET_ACCOUNT_GUEST = "SET_ACCOUNT_GUEST"
export const SET_ACCOUNT_USERNAME = "SET_ACCOUNT_USERNAME "



const initialState={
    
    username: "guest"


}

export default (state = initialState, action) => {

    switch (action.type){
        case SET_ACCOUNT_GUEST:
            return {username: "guest"}
        case SET_ACCOUNT_USERNAME:
            return {username: action.payload}
        
                

        default:
            return {...state}
    }
}
