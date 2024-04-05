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
    <div>
        <div>Balance: ${total}</div>
        <div>
            <h5>Incomes: ${totalIncomes}</h5>
            <h5>Outcomes: ${totalOutcomes}</h5>
        </div>
    </div>
  )
}

export default Balance