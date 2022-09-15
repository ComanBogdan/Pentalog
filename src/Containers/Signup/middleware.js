import { fetchTableData, fetchUserAccounts, sendUserAccount } from "../../Api";
import { FAKE_BACKEND_VALIDATION, SIGNUP_REQUEST, SIGNUP_REQUEST_FAILED, SIGNUP_REQUEST_SUCCES } from "./reducer";

import { all, call, put, takeLatest} from "redux-saga/effects"


const validateUsername = (array, username) => {
    let valid=true;
    array.map((user) => {
        if(user.username == username){
            valid=false;
        }
    })
    return valid;
}


export function* signupRequestMiddleware() {
    yield takeLatest(SIGNUP_REQUEST, signupRequestMiddlewareHandler);
}

export function* signupRequestMiddlewareHandler(action){
    try{
        //FAKE BACKEND VALIDATION
        const users = yield call(fetchUserAccounts);
        if(validateUsername(users, action.payload.username)){
            const resp = yield call(sendUserAccount, {username: action.payload.username, password: action.payload.password})
            yield put({type: SIGNUP_REQUEST_SUCCES})
        }else {
            yield put({type: SIGNUP_REQUEST_FAILED, payload: "Username is taken"})
        }
    }
    catch (e) {
        yield put({type: SIGNUP_REQUEST_FAILED, payload: e.message})
    }
}






export function* signupSaga(){
    yield all([signupRequestMiddleware()])
}

export default signupSaga;