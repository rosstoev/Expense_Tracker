import { Pressable, Text, View, StyleSheet } from "react-native";
import { useLayoutEffect, useContext } from "react";

import UpdateExpense from "../components/UpdateExpense";
import AddExpense from "../components/AddExpense";

function ManageExpenseScreen({ route, navigation }) {
  const expenseId = route.params ? route.params.expenseId : null;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: expenseId ? "Edit Expense" : "Add Expense",
    });
  }, [expenseId, navigation]);

  const renderComponent = expenseId ? <UpdateExpense expenseId={expenseId} navigation={navigation} /> : <AddExpense />;

  return renderComponent;
}

export default ManageExpenseScreen;
