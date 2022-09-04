import { all } from 'redux-saga/effects';

import signupMiddleware  from './Containers/Signup/middleware';

export function* rootSaga() {
    yield all([signupMiddleware()]);
}


export default rootSaga;