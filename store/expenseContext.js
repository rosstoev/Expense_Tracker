import { createContext, useState } from "react";

import { EXPENSES } from "../data/expenses";

export const ExpenseContext = createContext({
  expenses: [],
  addExpenses: (expense) => {},
  removeExpense: (id) => {},
});

function ExpenseContextProvider({ children }) {
  const [expenses, setExpenses] = useState(EXPENSES);

  function addExpense(expense) {
    setExpenses((currentExpenses) => [...currentExpenses, expense]);
  }

  function removeExpense(id) {
    setExpenses((currentExpenses) =>
      currentExpenses.filter((element) => element.id != id)
    );
  }

  const value = {
    expenses: expenses,
    addExpense: addExpense,
    removeExpense: removeExpense
  }

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
