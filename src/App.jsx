import logo from './logo.svg';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import TransactionForm from './components/transactions/TransactionForm';
import Balance from './components/Balance';
import TransactionList from './components/transactions/TransactionList';

function App() {
  return (
    <GlobalProvider>

      <Header />

      <div className="App">
        <TransactionForm />
        <TransactionList />
        <Balance />
        <h1>Expenses App</h1>
      </div>

    </GlobalProvider>
  );
}

export default App;
