import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/GlobalState'

const ExpenseChart = () => {

    const { transactions } = useGlobalState();

    let outPct = 0;
    let inPct = 0;

    if(transactions.length > 0) {
        const amounts = transactions.map(tr => tr.amount);
        const incomes = amounts.filter(am => am > 0);
        const outcomes = amounts.filter(am => am < 0);
        
        const totalIncomes = incomes.reduce((acc, item) => (acc += item), 0);
        const totalOutcomes = outcomes.reduce((acc, item) => (acc += item * -1 ), 0);
        
        const total = totalIncomes + totalOutcomes;
        outPct = Math.round(totalOutcomes/total*100, 2);
        inPct = Math.round(totalIncomes/total*100, 2);
    }

  return (
    <div>
        <VictoryPie
            colorScale={["#bf5959", "#3a9e6a"]}
            data = {[
                { x: "Expenses", y: outPct},
                { x: "Incomes", y: inPct},
            ]}
            animate={{
                duration: 200
            }}
            labels={({datum}) => `${datum.y} %`}
            labelComponent={
                <VictoryLabel
                    angle={0}
                    style={{fill: "white"}}
                />
            }   
        />
    </div>
  )
}

export default ExpenseChart