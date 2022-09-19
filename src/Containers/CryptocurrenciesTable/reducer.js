export const FETCH_CRYPTOCURRENCIES_REQUEST = "FETCH_CRYPTOCURRENCIES_REQUEST";
export const FETCH_CRYPTOCURRENCIES_SUCCES = "FETCH_CRYPTOCURRENCIES_SUCCES";
export const FETCH_CRYPTOCURRENCIES_FAILED = "FETCH_CRYPTOCURRENCIES_FAILED";

export const SEND_WATCHLIST_REQUEST = "SEND_WATCHLIST_REQUEST";
export const SEND_WATCHLIST_SUCCES = "SEND_WATCHLIST_SUCCES";
export const SEND_WATCHLIST_FAILED = "SEND_WATCHLIST_FAILED";

const initialState = {
  tableData: [],
  isLoading: true,
  error: "",
  watchlistLoading: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CRYPTOCURRENCIES_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_CRYPTOCURRENCIES_SUCCES:
      return {
        ...state,
        tableData: action.payload,
        error: "",
        isLoading: false,
      };
    case FETCH_CRYPTOCURRENCIES_FAILED:
      return {
        ...state,
        tableData: [],
        error: `Error: ${action.payload}`,
        isLoading: false,
      };

    case SEND_WATCHLIST_REQUEST:
      return {
        ...state,
        watchlistLoading: {
          ...state.watchlistLoading,
          [action.payload.coin]: true,
        },
      };
    case SEND_WATCHLIST_SUCCES:
      return {
        ...state,
        watchlistLoading: {
          ...state.watchlistLoading,
          [action.payload.coin]: false,
        },
      };

    default:
      return { ...state };
  }
};
