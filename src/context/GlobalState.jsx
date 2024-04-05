import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: []
}

export const Context = createContext(); // devuelve un objeto con dos propiedades: Provider and Consumer

// creo el comntexto aqui para no importarlo manualmente en cada componente
export const useGlobalState = () => {
    const context = useContext(Context);

    return context;
}

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    return (
        <Context.Provider value={{ 
            transactions: state.transactions,
            addTransaction,
        }}>
            {children}
        </Context.Provider>
    );
}