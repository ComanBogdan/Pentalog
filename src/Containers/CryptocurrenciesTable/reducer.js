export const FETCH_CRYPTOCURRENCIES_REQUEST = "FETCH_CRYPTOCURRENCIES_REQUEST";
export const FETCH_CRYPTOCURRENCIES_SUCCES = "FETCH_CRYPTOCURRENCIES_SUCCES";
export const FETCH_CRYPTOCURRENCIES_FAILED = "FETCH_CRYPTOCURRENCIES_FAILED";



const initialState={
    tableData: [],
    isLoading: true,
    error: "",

}

export default (state = initialState, action) => {

    switch (action.type){
        case FETCH_CRYPTOCURRENCIES_REQUEST:
            return {...state, isLoading: true}
        case FETCH_CRYPTOCURRENCIES_SUCCES:
            return {tableData: action.payload, error:"", isLoading: false}
        case FETCH_CRYPTOCURRENCIES_FAILED:
            return {tableData: [], error:`Error: ${action.payload}`, isLoading: false}
            

        default:
            return {...state}
    }


}