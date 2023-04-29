import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { useState, useContext } from "react";

import Input from "./ui/Input";
import Button from "./ui/Button";

function ExpenseForm({ onCancel, onSubmit, defaultData }) {
  const [formData, setFormData] = useState({
    title: { value: defaultData ? defaultData.title : "", isValid: true },
    price: {
      value: defaultData ? defaultData.price.toString() : "",
      isValid: true,
    },
    day: {
      value: defaultData ? defaultData.date.getUTCDate().toString() : "",
      isValid: true,
    },
    month: {
      value: defaultData ? (defaultData.date.getUTCMonth() + 1).toString() : "",
      isValid: true,
    },
    year: {
      value: defaultData ? defaultData.date.getFullYear().toString() : "",
      isValid: true,
    },
  });

  function onChangeInputText(type, data) {
    setFormData((formData) => {
      formData[type].value = data;
      return {
        title: { value: formData.title.value, isValid: formData.title.isValid },
        price: { value: formData.price.value, isValid: formData.price.isValid },
        day: { value: formData.day.value, isValid: formData.day.isValid },
        month: { value: formData.month.value, isValid: formData.month.isValid },
        year: { value: formData.year.value, isValid: formData.year.isValid },
      };
    });
  }

  return (
    <View style={styles.body}>
      <Input
        label="Title"
        isValid={formData.title.isValid}
        configuration={{
          onChangeText: onChangeInputText.bind(this, "title"),
          value: formData.title.value,
        }}
      />
      <Input
        label="Price"
        isValid={formData.price.isValid}
        configuration={{
          onChangeText: onChangeInputText.bind(this, "price"),
          value: formData.price.value,
          keyboardType: "decimal-pad",
        }}
      />
      <View style={styles.inputRowContainer}>
        <Input
          label="Day"
          isValid={formData.day.isValid}
          style={styles.inputRow}
          configuration={{
            onChangeText: onChangeInputText.bind(this, "day"),
            value: formData.day.value,
            keyboardType: "number-pad",
            placeholder: "DD",
          }}
        />
        <Input
          label="Month"
          style={styles.inputRow}
          isValid={formData.month.isValid}
          configuration={{
            onChangeText: onChangeInputText.bind(this, "month"),
            value: formData.month.value,
            keyboardType: "number-pad",
            placeholder: "MM",
          }}
        />
        <Input
          label="Year"
          style={styles.inputRow}
          isValid={formData.year.isValid}
          configuration={{
            onChangeText: onChangeInputText.bind(this, "year"),
            value: formData.year.value,
            keyboardType: "number-pad",
            placeholder: "YYYY",
          }}
        />
        
      </View>
      {(!formData.title.isValid ||
          !formData.price.isValid ||
          !formData.day.isValid ||
          !formData.month.isValid ||
          !formData.year.isValid) && <Text style={styles.errorText}>Invalid input data. Please check your inputs.</Text>}
      <View style={styles.buttonsContainer}>
        <Button text="Cancel" flat={false} onPress={onCancel} />
        <Button
          text="Save"
          flat={true}
          onPress={onSubmit.bind(this, formData, setFormData)}
        />
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = new StyleSheet.create({
  body: {
    margin: 20,
  },
  inputRowContainer: {
    flexDirection: "row",
  },
  inputRow: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#6655a9",
    borderBottomWidth: 2,
    marginVertical: 20,
  },
  inactiveButtonContainer: {
    padding: 5,
    minWidth: 120,
    marginVertical: 10,
  },
  activeButtonContainer: {
    minWidth: 120,
    backgroundColor: "#3e04c3",
    borderRadius: 4,
    marginVertical: 10,
    overflow: "hidden",
  },
  pressable: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  cancelText: {
    color: "#6655a9",
  },
  activeButtonText: {
    color: "#fde9ff",
  },
  errorText: {
    color: "#FF9494"
  }
});
