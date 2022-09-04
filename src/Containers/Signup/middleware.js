import { sendUserAccount } from "../../Api";
import { SIGNUP_REQUEST, SIGNUP_REQUEST_FAILED, SIGNUP_REQUEST_SUCCES } from "./reducer";

import { all, call, put, takeLatest} from "redux-saga/effects"






export function* signupRequestMiddleware() {
    yield takeLatest(SIGNUP_REQUEST, signupRequestMiddlewareHandler);
}

export function* signupRequestMiddlewareHandler(action){
    try{
        console.log(action);
        const resp = yield call(sendUserAccount, action.payload)
        yield put({type: SIGNUP_REQUEST_SUCCES})
    }
    catch (e) {
        yield put({type: SIGNUP_REQUEST_FAILED, payload: e.message})
    }
}

export function* signupSaga(){
    yield all([signupRequestMiddleware()])
}

export default signupSaga;