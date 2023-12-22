import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import Transaction from "./Transaction"
import LoadingBar from "./LoadingBar"

const TransactionList = () => {
  const { transactions, isLoading } = useContext(GlobalContext)

  return (
    <>
      <h3>History</h3>
      {isLoading ? (
        <LoadingBar />
      ) : (
        <ul className="list">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      )}
    </>
  )
}

export default TransactionList
