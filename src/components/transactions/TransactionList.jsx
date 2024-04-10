import { useGlobalState } from "../../context/GlobalState"
import TransactionItem from "./TransactionItem";

const TransactionList = () => {

    const { transactions, deleteTransaction } = useGlobalState();

  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold w-full">History</h3>
      <ul className="">
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