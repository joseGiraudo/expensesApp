import { useGlobalState } from "../../context/GlobalState"

const TransactionList = () => {

    const { transactions, deleteTransaction } = useGlobalState();

  return (
    <div>{
        transactions.map(tr => (
            <div key={tr.id}>
                <p>{tr.description}</p>
                <span>{tr.amount}</span>
                <button onClick={() => deleteTransaction(tr.id)}>X</button>
            </div>
        ))
        }</div>
  )
}

export default TransactionList