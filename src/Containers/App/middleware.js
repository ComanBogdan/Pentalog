import { fetchGlobalData, fetchTableData, fetchUser, sendWatchlist } from "../../Api";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GLOBAL_DATA_FAILED, GLOBAL_DATA_REQUEST, GLOBAL_DATA_SUCCES } from "./reducer";

export function* appRequestMiddleware() {
  yield takeLatest(
    GLOBAL_DATA_REQUEST,
    appRequestMiddlewareHandler
  );
}

export function* appRequestMiddlewareHandler(action) {
  try {
    const resp = yield call(fetchGlobalData);
    yield put({ type: GLOBAL_DATA_SUCCES, payload: resp });
  } catch (e) {
    yield put({ type: GLOBAL_DATA_FAILED});
  }
}



export function* appSaga() {
  yield all([
    appRequestMiddleware()
  ]);
}

export default appSaga;
