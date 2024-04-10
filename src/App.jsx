import logo from './logo.svg';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import TransactionForm from './components/transactions/TransactionForm';
import Balance from './components/Balance';
import TransactionList from './components/transactions/TransactionList';
import ExpenseChart from './components/ExpenseChart';

function App() {
  return (
    <GlobalProvider>
      <div className='bg-zinc-900 text-white h-screen flex justify-center items-center'>
        <div className='container mx-auto w-3/5'>
          <div className="bg-zinc-800 p-5 rounded-lg grid grid-cols-2 gap-4 mx-2">
            <div className=''>
              <Header />
              <TransactionForm />
              <TransactionList />
            </div>
            <div className='py-5 text-center'>
              <Balance />
              <ExpenseChart />
            </div>
          </div>                    
        </div>
    </div>
      </GlobalProvider>
  );
}

export default App;
