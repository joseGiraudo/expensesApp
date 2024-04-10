import { useGlobalState } from '../context/GlobalState';

const Balance = () => {

    const { transactions }  = useGlobalState();

    const amounts = transactions.map(tr => tr.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);

    const incomes = amounts.filter(am => am > 0);
    const outcomes = amounts.filter(am => am < 0);

    const totalIncomes = incomes.reduce((acc, item) => (acc += item), 0);
    const totalOutcomes = outcomes.reduce((acc, item) => (acc += item), 0);

  return (
    <div className='grid grid-rows-2'>
        <div className='text-xl font-bold mx-auto'>Balance: ${total}</div>
        <div className='grid grid-cols-2 mx-auto py-2'>
            <h5 className='mx-2'>Incomes: ${totalIncomes}</h5>
            <h5 className='mx-2'>Outcomes: ${totalOutcomes}</h5>
        </div>
    </div>
  )
}

export default Balance