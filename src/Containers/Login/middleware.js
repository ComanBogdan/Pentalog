import { useNavigate } from "react-router-dom";
import { all, call, delay, put, takeLatest} from "redux-saga/effects"
import { fetchUserAccounts } from "../../Api";
import { SET_ACCOUNT_USERNAME } from "../App/reducer";
import { LOGIN_REQUEST, LOGIN_REQUEST_FAILED, LOGIN_REQUEST_SUCCES, REDIRECT_AFTER_LOGIN, REDIRECT_SUCCES } from "./reducer";

let id=[];
let watchlist=[];


const findUser = (array, username, password) => {
    
    //return array.some((item) => item.username?.toLowerCase() === username?.toLowerCase() && item?.password === password);
    let found = false;
    array.map((item) => {
        if(item.username?.toLowerCase() === username?.toLowerCase() && item?.password === password){
            found = true;
            id=item.id;
            watchlist=item.watchlist;
        }
    })
    return found;
}

export function* loginRequestMiddleware() {
    yield takeLatest(LOGIN_REQUEST, loginRequestMiddlewareHandler);
}

export function* loginRequestMiddlewareHandler(action){
    try{
    
    

        //FAKE VALIDATION
        const users = yield call(fetchUserAccounts);
        if(findUser(users, action.payload.username, action.payload.password)){
            yield put({type: SET_ACCOUNT_USERNAME, payload: {username: action.payload.username, id, watchlist}});
            
            yield put ({type: LOGIN_REQUEST_SUCCES});
            yield delay(5000);
            yield put({type: REDIRECT_AFTER_LOGIN});
        }
        else {
            yield put({type: LOGIN_REQUEST_FAILED, payload: "Account not found"});
        }

        // let found = false;

        // users.map((item) => {
        // if(item.username.toLowerCase() === action.payload.username.toLowerCase() && item.password === action.payload.password){
        //     found = true;
        //     console.log(item.username);
        //     //yield put({type: SET_ACCOUNT_USERNAME, payload: action.payload.username})
        //     //yield put ({type: LOGIN_REQUEST_SUCCES})
        // }
        // })

        

    }
    catch (e) {
        yield put({type: LOGIN_REQUEST_FAILED, payload: e.message})
    }
}

export function* loginSaga(){
    yield all([loginRequestMiddleware()])
}

export default loginSaga;