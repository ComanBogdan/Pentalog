export const SET_ACCOUNT_GUEST = "SET_ACCOUNT_GUEST"
export const SET_ACCOUNT_USERNAME = "SET_ACCOUNT_USERNAME "
export const SET_WATCHLIST = "SET_WATCHLIST"

export const GLOBAL_DATA_REQUEST = "GLOBAL_DATA_REQUEST"
export const GLOBAL_DATA_SUCCES = "GLOBAL_DATA_SUCCES"
export const GLOBAL_DATA_FAILED = "GLOBAL_DATA_FAILED"


const initialState={
    
    username: "guest",
    id: [],
    watchlist: [],
    globalData: {},


}

export default (state = initialState, action) => {
    switch (action.type){
        case SET_ACCOUNT_GUEST:
            return {...state, username: "guest", id: []}
        case SET_ACCOUNT_USERNAME:
            return {...state, username: action.payload.username, id: action.payload.id, watchlist: action.payload.watchlist}
        
        case GLOBAL_DATA_SUCCES:
            return {...state, globalData: action.payload}
        case GLOBAL_DATA_FAILED:
            return {...state, globalData: {}}
                

        default:
            return {...state}
    }
}
