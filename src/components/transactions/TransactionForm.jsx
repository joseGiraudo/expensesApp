import React, { useState } from 'react';
import { useGlobalState } from '../../context/GlobalState';

const TransactionForm = () => {

    const { addTransaction } = useGlobalState();

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(description, amount);
        addTransaction({
            id: window.crypto.randomUUID(),
            description,
            amount: +amount // el + sirve para convertirlo a int
        });
        setDescription("");
        setAmount(0);

    }

  return (
    <div className='py-5'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a description"
                onChange={(e) => setDescription(e.target.value)}
                className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
                value={description}
            />
            <input type="number" placeholder="00.00"
                onChange={(e) => setAmount(e.target.value)}
                className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
                value={amount}
            />
            <button
                className='bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full hover:bg-indigo-500'
            >
                Add Transaction
            </button>
        </form>
    </div>
  )
}

export default TransactionForm