import logo from './logo.svg';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import TransactionForm from './components/TransactionForm';
import Balance from './components/Balance';

function App() {
  return (
    <GlobalProvider>

      <Header />

      <div className="App">
        <TransactionForm />
        <Balance />
        <h1>Expenses App</h1>
      </div>

    </GlobalProvider>
  );
}

export default App;
