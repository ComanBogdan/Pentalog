export const SEND_TRANSACTION_REQUEST = "SEND_TRANSACTION_REQUEST";
export const SEND_TRANSACTION_SUCCES = "SEND_TRANSACTION_SUCCES";
export const SEND_TRANSACTION_FAILED = "SEND_TRANSACTION_FAILED";

export const GET_TRANSACTION_REQUEST = "GET_TRANSACTION_REQUEST";
export const GET_TRANSACTION_SUCCES = "GET_TRANSACTION_SUCCES";
export const GET_TRANSACTION_FAILED = "GET_TRANSACTION_FAILED";

export const CALCULATE_AVERAGE_PRICE_REQUEST =
  "CALCULATE_AVERAGE_PRICE_REQUEST";
export const CALCULATE_AVERAGE_PRICE_SUCCES = "CALCULATE_AVERAGE_PRICE_SUCCES";
export const CALCULATE_AVERAGE_PRICE_FAILED = "CALCULATE_AVERAGE_PRICE_FAILED";

export const CALCULATE_GAINS_LOSSES = "CALCULATE_GAINS_LOSSES"

export const CALCULATE_GAINS_LOSSES_SUCCES = "CALCULATE_GAINS_LOSSES_SUCCES"

const initialState = {
  transaction: {},

  averagePrice: {},

  topGains: [],
  topLosses: [],
  latestTransactions: [],

  isLoading: false,
  success: false,

  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTION_REQUEST:
      return { ...state, isLoading: true, error: "" };

    case GET_TRANSACTION_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        transaction: {},
      };

    case GET_TRANSACTION_SUCCES:
      return {
        ...state,
        iLoading: false,
        error: "",
        transaction: action.payload,
      };

    case SEND_TRANSACTION_REQUEST:
      return { ...state, isLoading: true, error: "" };

    case SEND_TRANSACTION_FAILED:
      return { ...state, isLoading: false, error: action.payload };

    case SEND_TRANSACTION_SUCCES:
      return { ...state, iLoading: false, error: "" };

    case CALCULATE_AVERAGE_PRICE_REQUEST:
      return { ...state, isLoading: true, error: "" };

    case CALCULATE_AVERAGE_PRICE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        averagePrice: {},
      };

    case CALCULATE_AVERAGE_PRICE_SUCCES:
      return {
        ...state,
        iLoading: false,
        error: "",
        averagePrice: action.payload,
      };

    case CALCULATE_GAINS_LOSSES_SUCCES:
        return {...state, topGains: action.payload.topGains, topLosses: action.payload.topLosses, latestTransactions: action.payload.latestTransactions}

    default:
      return { ...state };
  }
};
