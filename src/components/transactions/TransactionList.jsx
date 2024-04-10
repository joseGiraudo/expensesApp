import { useGlobalState } from "../../context/GlobalState"
import TransactionItem from "./TransactionItem";

const TransactionList = () => {

    const { transactions, deleteTransaction } = useGlobalState();

  return (
    <>
      <h3 className="text-slate-300 text-xl py-1 font-bold w-full">History</h3>
      <ul className="overflow-auto max-h-60">
        {
          transactions.map(tr => (
            <TransactionItem key={tr.id} transaction={tr} deleteTransaction={deleteTransaction} />
          ))
        }
      </ul>
    </>
  )
}

export default TransactionList