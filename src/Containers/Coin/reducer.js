export const FETCH_COIN_REQUEST = "FETCH_COIN_REQUEST";
export const FETCH_COIN_SUCCES = "FETCH_COIN_SUCCES";
export const FETCH_COIN_FAILED = "FETCH_COIN_FAILED";

export const FETCH_COIN_CHART_DATA_SUCCES = "FETCH_COIN_CHART_DATA_SUCCES"
export const FETCH_COIN_CHART_DATA_FAILED = "FETCH_COIN_CHART_DATA_FAILED"



const initialState={
    coinData: [],
    chartData:[],
    isLoading: true,
    error: "",

}

export default (state = initialState, action) => {

    switch (action.type){

        case FETCH_COIN_REQUEST:
            return {...state, isLoading: true}
        case FETCH_COIN_SUCCES:
            return {...state, coinData: action.payload, isLoading: false, error: ""}
        case FETCH_COIN_FAILED:
            return {...state, coinData: [], isLoading: false, error: action.payload}

        case FETCH_COIN_CHART_DATA_SUCCES:
            return {...state, chartData: action.payload, error: ""}

        case FETCH_COIN_CHART_DATA_FAILED:
            return {...state, chartData: [], isLoading: false, error: action.payload}
            

        default:
            return {...state}
    }


}