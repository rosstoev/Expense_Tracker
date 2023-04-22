import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { useState, useContext } from "react";

import { ExpenseContext } from "../store/expenseContext";
import Expense from "../models/expense";

function AddExpense() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    day: "",
    month: "",
    year: "",
  });

  const expenseContext = useContext(ExpenseContext);
  const expenses = expenseContext.expenses;

  function onChangeInputText(type, data) {
    setFormData((formData) => {
      formData[type] = data;
      return {title: formData.title, price: formData.price, day: formData.day, month: formData.month, year: formData.year};
    });
  }

  function onSubmitHandler() {
    const date = new Date();
    let day = formData.day;
    let month = formData.month;
    let year = formData.year;
    date.setUTCHours(0);
    date.setUTCMinutes(0);
    date.setUTCSeconds(0);
    date.setDate(day);
    date.setUTCMonth((parseInt(month) - 1));
    date.setFullYear(year);

    const lastIndex = expenses.length;
    const price = parseFloat(formData.price);
    const expense = new Expense(`e${lastIndex + 1}`, formData.title, price, date);
    expenseContext.addExpense(expense);
    setFormData({
        title: "",
        price: "",
        day: "",
        month: "",
        year: "",
      });
  }

  return (
    <View style={styles.body}>
      <View style={styles.inputColContainer}>
        <Text style={styles.inputLabel}>Title</Text>
        <TextInput
          style={styles.colInput}
          onChangeText={onChangeInputText.bind(this, "title")}
          value={formData.title}
        />
      </View>
      <View style={styles.inputColContainer}>
        <Text style={styles.inputLabel}>Price</Text>
        <TextInput
          style={styles.colInput}
          onChangeText={onChangeInputText.bind(this, "price")}
          value={formData.price}
          keyboardType="decimal-pad"
        />
      </View>
      <View style={styles.inputRowContainer}>
        <View style={styles.inputRowInnerContainer}>
          <Text style={styles.inputLabel}>Day</Text>
          <TextInput
            style={styles.rowInput}
            onChangeText={onChangeInputText.bind(this, "day")}
            value={formData.day}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.inputRowInnerContainer}>
          <Text style={styles.inputLabel}>Month</Text>
          <TextInput
            style={styles.rowInput}
            onChangeText={onChangeInputText.bind(this, "month")}
            value={formData.month}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.inputRowInnerContainer}>
          <Text style={styles.inputLabel}>Year</Text>
          <TextInput
            style={styles.rowInput}
            onChangeText={onChangeInputText.bind(this, "year")}
            value={formData.year}
            keyboardType="number-pad"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.saveButton}
          onPress={onSubmitHandler}
          android_ripple={{ color: "#9162ff" }}
        >
          <Text style={styles.saveText}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default AddExpense;

const styles = new StyleSheet.create({
  body: {
    flex: 1,
    margin: 20,
    overflow: "hidden",
  },
  inputColContainer: {
    alignItems: "center",
  },
  inputLabel: {
    color: "#ffffffff",
    fontSize: 16,
    padding: 10,
  },
  colInput: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 300,
    height: 40,
    backgroundColor: "#ffffffff",
    borderRadius: 4,
    fontSize: 18,
  },
  inputRowContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  inputRowInnerContainer: {
    flex: 1,
    alignItems: "center",
  },
  rowInput: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 80,
    height: 40,
    backgroundColor: "#ffffffff",
    borderRadius: 4,
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: "#3e04c3",
    marginHorizontal: 120,
    borderRadius: 4,
    overflow: "hidden",
  },

  saveButton: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  saveText: {
    alignSelf: "center",
    color: "#ffffffff",
  },
});
