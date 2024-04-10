import React from 'react'

const TransactionItem = ({ transaction, deleteTransaction }) => {

  const clase = transaction.amount > 0 ? "bg-green-400" : "bg-red-400";


  return (
    
    <li className="bg-zinc-600 text-white py-1 my-1 rounded-lg w-full flex justify-between items-center">
      <div className={`${clase} px-1 rounded-lg`}>-</div>
        <p className='text-sm'>{transaction.description}</p>
        <div className='items-left px-2'>
            <span className='mx-2 px-2'>$ {transaction.amount}</span>
            <button onClick={() => deleteTransaction(transaction.id)}
                className='bg-zinc-500 px-1 rounded-lg hover:bg-red-300'
            >Delete</button>
        </div>
    </li>
  )
}

export default TransactionItem