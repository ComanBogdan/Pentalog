import {
  fetchUser,
  sendTransaction,
} from "../../Api";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CALCULATE_AVERAGE_PRICE_REQUEST,
  CALCULATE_AVERAGE_PRICE_SUCCES,
  CALCULATE_GAINS_LOSSES,
  CALCULATE_GAINS_LOSSES_SUCCES,
  GET_TRANSACTION_FAILED,
  GET_TRANSACTION_REQUEST,
  GET_TRANSACTION_SUCCES,
  SEND_TRANSACTION_FAILED,
  SEND_TRANSACTION_REQUEST,
  SEND_TRANSACTION_SUCCES,
} from "./reducer";



export function* transactionRequestMiddleware() {
  yield takeLatest(
    SEND_TRANSACTION_REQUEST,
    transactionRequestMiddlewareHandler
  );
}

export function* transactionRequestMiddlewareHandler(action) {
  try {
    const user = yield call(fetchUser, action.payload.userId);

    const newUser = {
      ...user,
      transaction: {
        ...user.transaction,
      },
    };

    if (
      newUser.transaction.hasOwnProperty(action.payload.formValues.coin) ===
      false
    ) {
      newUser.transaction[action.payload.formValues.coin] = [];
    }

    newUser.transaction[action.payload.formValues.coin].push({
      quantity: action.payload.formValues.quantity,
      price: action.payload.formValues.price,
      date: action.payload.formValues.date,
    });

    const resp = yield call(sendTransaction, action.payload.userId, newUser);

    yield put({ type: SEND_TRANSACTION_SUCCES, payload: resp });
    yield put({ type: GET_TRANSACTION_REQUEST, payload: {id: action.payload.id}})
  } catch (e) {
    yield put({ type: SEND_TRANSACTION_FAILED, payload: e.message });
  }
}

export function* getTransactionRequestMiddleware() {
  yield takeLatest(
    GET_TRANSACTION_REQUEST,
    getTransactionRequestMiddlewareHandler
  );
}

export function* getTransactionRequestMiddlewareHandler(action) {
  try {
    const user = yield call(fetchUser, action.payload.id);

    yield put({
      type: CALCULATE_AVERAGE_PRICE_REQUEST,
      payload: {transaction: user.transaction},
    });
    yield put({ type: GET_TRANSACTION_SUCCES, payload: user.transaction });
  } catch (e) {
    yield put({ type: GET_TRANSACTION_FAILED, payload: e.message });
  }
}

export function* calculateAverageRequestMiddleware() {
  yield takeLatest(
    CALCULATE_AVERAGE_PRICE_REQUEST,
    calculateAverageRequestMiddlewareHandler
  );
}

export function* calculateAverageRequestMiddlewareHandler(action) {
  try {

    

    

    const averagePrice = {};
    Object.keys(action.payload.transaction).map(function (key, value) {
      var tempPrice = 0;
      var tempQuantity = 0;

      action.payload.transaction[key].map((item) => {
        tempPrice += parseFloat(item.price);
        tempQuantity += parseFloat(item.quantity);
      });

    

      averagePrice[key] = {
        average: tempPrice / tempQuantity,
        totalPrice: tempPrice,
      };
    });

  

    yield put({ type: CALCULATE_AVERAGE_PRICE_SUCCES, payload: averagePrice });
    //yield put({ type: GET_TRANSACTION_SUCCES, payload: user.transaction });
  } catch (e) {
    //yield put({ type: GET_TRANSACTION_FAILED, payload: e.message });
  }
}


export function* calculateGainsAndLossesRequestMiddleware() {
  yield takeLatest(
    CALCULATE_GAINS_LOSSES,
    calculateGainsAndLossesRequestMiddlewareHandler
  );
}

function compare( a, b ) {
  if ( a.percent < b.percent ){
    return 1;
  }
  if ( a.percent > b.percent ){
    return -1;
  }
  return 0;
}



export function* calculateGainsAndLossesRequestMiddlewareHandler(action) {
  try {
  
    const averagePrice = {...action.payload.averagePrice}

    console.log("payload ")
    console.log(action.payload)
  

    const arr =[];

    Object.keys(averagePrice).map(function (key, value) {
      action.payload.tableData.map((item) => {
        if(item.id == key) {
          if(item.current_price > averagePrice[key].average) {
            averagePrice[key].percent = (item.current_price - averagePrice[key].average) / averagePrice[key].average * 100
          }
          else {
  
            averagePrice[key].percent = -Math.abs((averagePrice[key].average - item.current_price) / item.current_price * 100) 
  
          }

          arr.push({id: key, percent: averagePrice[key].percent, name: item.name})
        }

        

        

      })

    });

    
    arr.sort(compare);

    const reversed = [...arr].reverse();
    const gainsArr = []

    const lossesArr = []

    if(arr[0].percent > 0)
      gainsArr.push(arr[0]);
    if(arr[1].percent > 0)
      gainsArr.push(arr[1]);
    if(arr[2].percent > 0)
      gainsArr.push(arr[2]);

    if(reversed[0].percent < 0)
      lossesArr.push(reversed[0]);
    if(reversed[1].percent < 0)
      lossesArr.push(reversed[1]);
    if(reversed[2].percent < 0)
      lossesArr.push(reversed[2]);

    




    yield put({ type: CALCULATE_GAINS_LOSSES_SUCCES, payload: {topGains: gainsArr, topLosses: lossesArr, latestTransactions: []} });
  } catch (e) {
    //yield put({ type: GET_TRANSACTION_FAILED, payload: e.message });
  }
}

export function* dashboardSaga() {
  yield all([
    transactionRequestMiddleware(),
    getTransactionRequestMiddleware(),
    calculateAverageRequestMiddleware(),
    calculateGainsAndLossesRequestMiddleware(),
  ]);
}

export default dashboardSaga;
