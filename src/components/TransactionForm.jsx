import React, { useState } from 'react';
import { useGlobalState } from '../context/GlobalState';

const TransactionForm = () => {

    const { addTransaction } = useGlobalState();

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(description, amount);
        addTransaction({
            id: 1, description, amount
        });

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a description"
                onChange={(e) => setDescription(e.target.value)}
            />
            <input type="number" placeholder="00.00"
                onChange={(e) => setAmount(e.target.value)}
            />
            <button>
                Add Transaction
            </button>
        </form>
    </div>
  )
}

export default TransactionForm