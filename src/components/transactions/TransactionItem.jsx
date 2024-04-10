import React from 'react'

const TransactionItem = ({ transaction, deleteTransaction }) => {
  return (
    
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg w-full flex justify-between items-center">
        <p className='text-sm'>{transaction.description}</p>
        <div className='items-left'>
            <span className='mx-2 px-2'>$ {transaction.amount}</span>
            <button onClick={() => deleteTransaction(transaction.id)}
                className='bg-gray-500'
            >X</button>
        </div>
    </li>
  )
}

export default TransactionItem