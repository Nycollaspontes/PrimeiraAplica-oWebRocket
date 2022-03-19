import { Dashboard } from "./components/Dashboard/Index";
import { Header } from "./components/Header/Index";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewtransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

  function handleOpenNewTransactionsModal() {
    setIsNewTransactionsModalOpen(true);
  }

  function handleCloseNewTransactionsModal() {
    setIsNewTransactionsModalOpen(false);
  }

  return (
    <TransactionsProvider>

      <Header onOpenNewTransactionModal={handleOpenNewTransactionsModal} />

      <Dashboard />
      
      <NewtransactionModal isOpen = {isNewTransactionsModalOpen} onRequestClose={handleCloseNewTransactionsModal}/>
      
      
      <GlobalStyle />

    </TransactionsProvider>
  );
}

