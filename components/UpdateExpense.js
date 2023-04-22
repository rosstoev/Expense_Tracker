import { View, Pressable, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";

import { ExpenseContext } from "../store/expenseContext";

function UpdateExpense({ expenseId, navigation }) {
  const expenseContex = useContext(ExpenseContext);

  function onPressUpdateHandler(expenseId) {
    expenseContex.updateExpense(expenseId);
    navigation.navigate("Recent");
  }

  function onPressCancelHandler() {
    navigation.goBack();
  }

  function onPressDeleteHandler(expenseId) {
    expenseContex.removeExpense(expenseId);
    navigation.navigate("Recent");
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttonsContainer}>
        <View style={styles.inactiveButtonContainer}>
          <Pressable onPress={onPressCancelHandler}>
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>
        </View>
        <View style={styles.activeButtonContainer}>
          <Pressable
            style={styles.pressable}
            onPress={onPressUpdateHandler.bind(this, expenseId)}
            android_ripple={{ color: "#9162ff" }}
          >
            <Text style={styles.activeButtonText}>Update</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Pressable onPress={onPressDeleteHandler.bind(this, expenseId)}>
          <Ionicons name="trash-sharp" color={"#8d1353"} size={26} />
        </Pressable>
      </View>
    </View>
  );
}

export default UpdateExpense;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 20,
        alignItems: "center",
      },
      buttonsContainer: {
        flexDirection: "row",
        alignContent: "space-between",
        borderBottomColor: "#6655a9",
        borderBottomWidth: 2,
        marginBottom: 20,
      },
      inactiveButtonContainer: {
        marginHorizontal: 50,
        marginBottom: 10,
        paddingVertical: 5,
      },
      activeButtonContainer: {
        marginHorizontal: 50,
        marginBottom: 10,
        backgroundColor: "#3e04c3",
        borderRadius: 4,
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
})
