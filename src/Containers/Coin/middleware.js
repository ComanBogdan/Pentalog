import { fetchCoinHistoricalData, fetchTableData } from "../../Api";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  FETCH_COIN_FAILED,
  FETCH_COIN_CHART_DATA_SUCCES,
  FETCH_COIN_REQUEST,
  FETCH_COIN_SUCCES,
  FETCH_CRYPTOCURRENCIES_FAILED,
  FETCH_CRYPTOCURRENCIES_SUCCES,
  FETCH_COIN_CHART_DATA_REQUEST,
  FETCH_COIN_CHART_DATA_FAILED,
} from "./reducer";

import { fetchCoinData } from "../../Api/index";

export function* coinRequestMiddleware() {
  yield takeEvery(FETCH_COIN_REQUEST, coinRequestMiddlewareHandler);
}

export function* coinRequestMiddlewareHandler(action) {
  try {
    console.log(action);
    const resp = yield call(fetchCoinData, action.payload);

    yield put({ type: FETCH_COIN_SUCCES, payload: resp });
  } catch (e) {
    yield put({ type: FETCH_COIN_FAILED, payload: e.message });
  }
}





export function* chartRequestMiddleware() {
  yield takeEvery(FETCH_COIN_CHART_DATA_REQUEST, chartRequestMiddlewareHandler);
}

export function* chartRequestMiddlewareHandler(action) {
  try {
    const respChartData = yield call(
      fetchCoinHistoricalData,
      action.payload.name,
      action.payload.days
    );

    yield put({ type: FETCH_COIN_CHART_DATA_SUCCES, payload: respChartData });
  } catch (e) {
    yield put({ type: FETCH_COIN_CHART_DATA_FAILED, payload: e.message });
  }
}

export function* coinSaga() {
  yield all([coinRequestMiddleware(), chartRequestMiddleware()]);
}

export default coinSaga;
