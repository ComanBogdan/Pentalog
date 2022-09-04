import reducer from "./Containers/CryptocurrenciesTable/reducer";

import {configureStore} from "@reduxjs/toolkit";

import signupReducer from './Containers/Signup/reducer'
import loginReducer from './Containers/Login/reducer'
import appReducer from './Containers/App/reducer'

import sagas from './middlewares'

import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();



export default configureStore({
    reducer:{
        cryptocurrencies: reducer,
        signup: signupReducer,
        login: loginReducer,
        app: appReducer,
    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(sagas);