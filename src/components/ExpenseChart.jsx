import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/GlobalState'

const ExpenseChart = () => {

    const { transactions } = useGlobalState();
    const amounts = transactions.map(tr => tr.amount);
    const incomes = amounts.filter(am => am > 0);
    const outcomes = amounts.filter(am => am < 0);
    
    const totalIncomes = incomes.reduce((acc, item) => (acc += item), 0);
    const totalOutcomes = outcomes.reduce((acc, item) => (acc += item * -1 ), 0);
    
    const total = totalIncomes + totalOutcomes;
    const outPct = Math.round(totalOutcomes/total*100, 2);
    const inPct = Math.round(totalIncomes/total*100, 2);

  return (
    <>
        {transactions.length <= 0 ? (
         <span className='mx-2 text-sm text-gray-600 p-2'>Ingresa datos para ver el grafico</span>
        ) : (
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
        )}
    </>
  )
}

export default ExpenseChart