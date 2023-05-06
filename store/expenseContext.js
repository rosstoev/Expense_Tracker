import { createContext, useReducer } from "react";

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: (expense) => {},
  removeExpense: (id) => {},
  updateExpense: (id, expense) => {},
  setExpenses: (expenses) => {}
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
    case "set":
      return [...action.payload];
    default:
      return false;
  }
}

function ExpenseContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, []);
  function addExpense(expense) {
    dispatch({ type: "add", expense: expense });
  }

  function removeExpense(id) {
    dispatch({ type: "delete", id: id });
  }

  function updateExpense(id, expense) {
    dispatch({type: "edit", id: id, expense: expense})
  }

  function setExpenses(expenses) {
    dispatch({type: "set", payload: expenses})
  }

  const value = {
    expenses: state,
    addExpense: addExpense,
    removeExpense: removeExpense,
    updateExpense: updateExpense,
    setExpenses: setExpenses
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
