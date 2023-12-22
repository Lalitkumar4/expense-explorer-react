const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_TRANSACTIONS":
      return {
        transactions: action.payload,
      }
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      }
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      }
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}

export default AppReducer
