import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';
// 2
interface Transaction {
    id: number;
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAT: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAT'>

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}


interface TransactionProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext<TransactionContextData>(
    {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);
    async function createTransaction(transactionInput: TransactionInput) {
     const response = await api.post('/transactions', {
         ...transactionInput,
         createdAT : new Date()
     })
     const { transaction } = response.data;


     setTransactions([
         ...transactions,
         transaction
     ])
    };

    return (

        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}
