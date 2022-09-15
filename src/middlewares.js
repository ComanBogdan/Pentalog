import { all } from 'redux-saga/effects';

import signupMiddleware  from './Containers/Signup/middleware';
import loginMiddleware from './Containers/Login/middleware'
import cryptocurrenciesMiddleware from './Containers/CryptocurrenciesTable/middleware'
import coinMiddleware from './Containers/Coin/middleware'

export function* rootSaga() {
    yield all([signupMiddleware(), loginMiddleware(), cryptocurrenciesMiddleware(), coinMiddleware()]);
}


export default rootSaga;