import { fetchCoinHistoricalData, fetchTableData} from "../../Api";
import { all, call, put, takeLatest} from "redux-saga/effects"
import { FETCH_COIN_FAILED, FETCH_COIN_CHART_DATA_SUCCES, FETCH_COIN_REQUEST, FETCH_COIN_SUCCES, FETCH_CRYPTOCURRENCIES_FAILED, FETCH_CRYPTOCURRENCIES_SUCCES } from "./reducer";

import {fetchCoinData} from '../../Api/index'


export function* coinRequestMiddleware() {
    yield takeLatest(FETCH_COIN_REQUEST, coinRequestMiddlewareHandler);
}

export function* coinRequestMiddlewareHandler(action){
    try{
    
        const resp = yield call(fetchCoinData, action.payload);
        const respChartData= yield call(fetchCoinHistoricalData, action.payload);
        

        yield put({type: FETCH_COIN_CHART_DATA_SUCCES, payload: respChartData})
        yield put({type: FETCH_COIN_SUCCES, payload: resp})
        
        
    }
    catch (e) {
        yield put({type: FETCH_COIN_FAILED, payload: e.message})
    }
}


export function* coinSaga(){
    yield all([coinRequestMiddleware()])
}

export default coinSaga;