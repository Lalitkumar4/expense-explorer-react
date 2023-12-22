import { useState, useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const AddTransaction = () => {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState(0)
  const [alert, setAlert] = useState(false)

  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = (e) => {
    e.preventDefault()

    if (text.trim() === "") {
      setAlert(true)
      return
    } else {
      const newTransaction = {
        text,
        amount: +amount,
      }

      addTransaction(newTransaction)

      setText("")
      setAmount(0)
      setAlert(false)
    }
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            autoComplete="off"
          />

          {alert ? (
            <small className="alert-text">Please enter a text.</small>
          ) : (
            ""
          )}
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            autoFocus
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
