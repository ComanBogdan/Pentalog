export const SET_ACCOUNT_GUEST = "SET_ACCOUNT_GUEST"
export const SET_ACCOUNT_USERNAME = "SET_ACCOUNT_USERNAME "
export const SET_WATCHLIST = "SET_WATCHLIST"



const initialState={
    
    username: "guest",
    id: [],
    watchlist: [],


}

export default (state = initialState, action) => {
    switch (action.type){
        case SET_ACCOUNT_GUEST:
            return {username: "guest", id: []}
        case SET_ACCOUNT_USERNAME:
            return {username: action.payload.username, id: action.payload.id, watchlist: action.payload.watchlist}
        
                

        default:
            return {...state}
    }
}
