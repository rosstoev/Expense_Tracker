import { Pressable, Text, View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

function ManageExpenseScreen({ route, navigation }) {
  const expenseId = route.params ? route.params.expenseId : null;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: expenseId ? "Edit Expense" : "Add Expense",
    });
  }, [expenseId, navigation]);

  function onPressUpdateHandler() {}

  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttonsContainer}>
        <View style={styles.inactiveButtonContainer}>
          <Pressable>
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>
        </View>
        <View style={styles.activeButtonContainer}>
          <Pressable
            style={styles.pressable}
            onPress={onPressUpdateHandler}
            android_ripple={{ color: "#9162ff" }}
          >
            <Text style={styles.activeButtonText}>Update</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Pressable>
          <Ionicons name="trash-sharp" color={"#8d1353"} size={26} />
        </Pressable>
      </View>
    </View>
  );
}

export default ManageExpenseScreen;

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
});
