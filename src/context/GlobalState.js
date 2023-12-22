import { createContext, useEffect, useReducer } from "react"
import AppReducer from "./AppReducer"

// Initial State
const initialState = {
  transactions: [],
  isLoading: false,
}

// Create context
export const GlobalContext = createContext()

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    fetchTransactions()
  }, [])

  // Fetching Transactions
  const fetchTransactions = async () => {
    dispatch({ type: "SET_LOADING", payload: true })

    const res = await fetch("http://localhost:5000/transactions")
    const data = await res.json()

    // Set transactions to transactions array
    dispatch({
      type: "SET_TRANSACTIONS",
      payload: data,
    })
    dispatch({ type: "SET_LOADING", payload: false })
  }

  //Actions
  async function deleteTransaction(id) {
    await fetch(`http://localhost:5000/transactions/${id}`, {
      method: "DELETE",
    })
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    })
  }

  async function addTransaction(transaction) {
    const res = await fetch("http://localhost:5000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    })

    const data = await res.json()

    dispatch({
      type: "ADD_TRANSACTION",
      payload: data,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        isLoading: state.isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
