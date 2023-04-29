import { createContext, useReducer } from "react";

import { EXPENSES } from "../data/expenses";

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: (expense) => {},
  removeExpense: (id) => {},
  updateExpense: (id, expense) => {},
});

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.expense];
    case "edit":
      let index = state.findIndex(function (expense) {
        return expense.id == action.id;
      });

      const updatedExpense = action.expense;
      const updateExpenses = [...state];
      updateExpenses[index] = updatedExpense;
      return updateExpenses;
    case "delete":
      return state.filter((element) => element.id != action.id);
    default:
      return false;
  }
}

function ExpenseContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, EXPENSES);

  function addExpense(expense) {
    dispatch({ type: "add", expense: expense });
  }

  function removeExpense(id) {
    dispatch({ type: "delete", id: id });
  }

  function updateExpense(id, expense) {
    dispatch({type: "edit", id: id, expense: expense})
  }

  const value = {
    expenses: state,
    addExpense: addExpense,
    removeExpense: removeExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
