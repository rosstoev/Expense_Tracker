import { View, StyleSheet } from "react-native";
import { useLayoutEffect, useContext, useState } from "react";

import ExpenseForm from "../components/ExpenseForm";
import IconButton from "../components/ui/IconButton";
import { ExpenseContext } from "../store/expenseContext";
import Expense from "../models/expense";
import { getMidnightDate } from "../util/date";
import { deleteData, saveData, updateData } from "../util/http";
import LoadingComponent from "../components/ui/LoadingComponent";
import ErrorOverlay from "../components/ui/ErrorOverlay";

function ManageExpenseScreen({ route, navigation }) {
  const expenseContext = useContext(ExpenseContext);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const expenses = expenseContext.expenses;
  const expenseId = route.params ? route.params.expenseId : null;
  const selectedExpense = expenseId
    ? expenses.find((item) => item.id === expenseId)
    : null;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: expenseId ? "Edit Expense" : "Add Expense",
    });
  }, [expenseId, navigation]);

  function onCancelHandler() {
    navigation.goBack();
  }

  function onPressDeleteHandler() {
    setLoading(true);
    deleteData(expenseId);
    expenseContext.removeExpense(expenseId);
    navigation.goBack();
  }

  async function onSubmitHandler(formData, setFormData) {
    setLoading(true);
    let day = formData.day.value;
    let month = formData.month.value;
    let year = formData.year.value;
    const date = getMidnightDate(day, month, year);
    const lastIndex = expenses.length;
    const id = isEditing ? expenseId : `e${lastIndex + 1}`;
    const title = formData.title.value;
    const price = +formData.price.value;

    const isValidTitle = title.trim().length > 0;
    const isValidPrice = !isNaN(price) && price > 0;
    const isValidDate = date !== "Invalid Date";

    formData.title.isValid = isValidTitle;
    formData.price.isValid = isValidPrice;
    formData.day.isValid = isValidDate;
    formData.month.isValid = isValidDate;
    formData.year.isValid = isValidDate;

    if (!isValidTitle || !isValidPrice || !isValidDate) {
      setFormData({
        title: { value: formData.title.value, isValid: formData.title.isValid },
        price: { value: formData.price.value, isValid: formData.price.isValid },
        day: { value: formData.day.value, isValid: formData.day.isValid },
        month: { value: formData.month.value, isValid: formData.month.isValid },
        year: { value: formData.year.value, isValid: formData.year.isValid },
      });
      return;
    }

    const expense = new Expense(null, title, price, date);

    try {
      if (isEditing) {
        updateData(id, expense);
        expense.id = id;
        expenseContext.updateExpense(id, expense);
      } else {
        const storedId = await saveData(expense);
        expense.id = storedId;
        expenseContext.addExpense(expense);
      }
      navigation.goBack();
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (error) {
      return <ErrorOverlay message={error.message}/>
  }

  return (
    <View>
      <ExpenseForm
        onCancel={onCancelHandler}
        onSubmit={onSubmitHandler}
        defaultData={selectedExpense}
      />
      {isEditing && (
        <View style={styles.removeContainer}>
          <IconButton
            icon="trash-sharp"
            color="#8d1353"
            size={26}
            onPress={onPressDeleteHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpenseScreen;

const styles = StyleSheet.create({
  removeContainer: {
    alignItems: "center",
  },
});
