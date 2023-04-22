import { createContext, useState } from "react";

import { EXPENSES } from "../data/expenses";
import { executeNativeBackPress } from "react-native-screens";

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: (expense) => {},
  removeExpense: (id) => {},
  updateExpense: (id) => {}
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

  function updateExpense(id) {

      setExpenses((currentExpenses) => {
        let index = currentExpenses.findIndex(function(expense) {
          return expense.id == id;
        })

        currentExpenses[index].date = new Date();
        return currentExpenses;
      })
  }

  const value = {
    expenses: expenses,
    addExpense: addExpense,
    removeExpense: removeExpense,
    updateExpense: updateExpense
  }

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
