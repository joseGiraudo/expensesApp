import { useGlobalState } from '../context/GlobalState';

const Balance = () => {

    const data = useGlobalState();

    const { total } = data;

  return (
    <div>Balance: {JSON.stringify(data)}</div>
  )
}

export default Balance