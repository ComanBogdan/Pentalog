import { fetchTableData, fetchUser, sendWatchlist } from "../../Api";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  FETCH_CRYPTOCURRENCIES_FAILED,
  FETCH_CRYPTOCURRENCIES_REQUEST,
  FETCH_CRYPTOCURRENCIES_SUCCES,
  SEND_WATCHLIST_REQUEST,
  SEND_WATCHLIST_SUCCES,
} from "./reducer";

export function* cryptocurrenciesRequestMiddleware() {
  yield takeLatest(
    FETCH_CRYPTOCURRENCIES_REQUEST,
    cryptocurrenciesRequestMiddlewareHandler
  );
}

export function* cryptocurrenciesRequestMiddlewareHandler(action) {
  try {
    const resp = yield call(fetchTableData);
    yield put({ type: FETCH_CRYPTOCURRENCIES_SUCCES, payload: resp });
  } catch (e) {
    yield put({ type: FETCH_CRYPTOCURRENCIES_FAILED, payload: e.message });
  }
}

export function* watchlistRequestMiddleware() {
  yield takeEvery(SEND_WATCHLIST_REQUEST, watchlistRequestMiddlewareHandler);
}

export function* watchlistRequestMiddlewareHandler(action) {
  try {
    console.log(action);

    const user = yield call(fetchUser, action.payload.id);

    const resp = yield call(sendWatchlist, action.payload.id, {
      ...user,
      watchlist: {
        ...action.payload.watchlist,
        [action.payload.coin]: action.payload.check,
      },
    });
    yield put({
      type: SEND_WATCHLIST_SUCCES,
      payload: { resp, coin: action.payload.coin },
    });
  } catch (e) {}
}

export function* cryptocurrenciesSaga() {
  yield all([
    cryptocurrenciesRequestMiddleware(),
    watchlistRequestMiddleware(),
  ]);
}

export default cryptocurrenciesSaga;
