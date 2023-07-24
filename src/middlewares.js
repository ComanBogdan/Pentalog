import { all } from 'redux-saga/effects';

import signupMiddleware  from './Containers/Signup/middleware';
import loginMiddleware from './Containers/Login/middleware'
import cryptocurrenciesMiddleware from './Containers/CryptocurrenciesTable/middleware'
import coinMiddleware from './Containers/Coin/middleware'
import appMiddleware from './Containers/App/middleware'
import dashboardMiddleware from './Containers/Dashboard/middleware'

export function* rootSaga() {
    yield all([signupMiddleware(), loginMiddleware(), cryptocurrenciesMiddleware(), coinMiddleware(), appMiddleware(), dashboardMiddleware()]);
}


export default rootSaga;