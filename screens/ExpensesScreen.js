import { ScrollView, View, StyleSheet, Text } from "react-native";
import { useLayoutEffect, useContext, useState } from "react";

import TotalSection from "../components/TotalSection";
import List from "../components/List";
import IconButton from "../components/ui/IconButton";
import { ExpenseContext } from "../store/expenseContext";
import { getLastDaysDate } from "../util/date";
import { fetchData } from "../util/http";
import LoadingComponent from "../components/ui/LoadingComponent";
import ErrorOverlay from "../components/ui/ErrorOverlay";

function ExpensesScreen({ route, navigation }) {
  const [isFetchData, setIsDataFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { recent } = route.params;
  const expenseContext = useContext(ExpenseContext);
  const expenses = expenseContext.expenses;

  const recentDate = getLastDaysDate(new Date(), 7);

  function iconPressHandler() {
    navigation.navigate("ManageExpenses");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="add"
            color="white"
            size={26}
            onPress={iconPressHandler}
          />
        );
      },
    });

    async function fetchExpenses() {
      if (!isFetchData) {
        try {
          const expenses = await fetchData();
          expenseContext.setExpenses(expenses);
        } catch (error) {
          setError(error);
        }
        setIsDataFetch(true);
        setIsLoading(false);
      }
    }

    fetchExpenses();
  }, [navigation, iconPressHandler]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (error && isFetchData) {
    return <ErrorOverlay message={error.message} />;
  }

  const expenseList = recent
    ? expenses.filter((element) => element.date > recentDate)
    : expenses;
  const total = expenseList.reduce(
    (currentSum, element) => currentSum + element.price,
    0
  );

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <TotalSection title={recent ? "Last 7 days" : "Total"} price={total} />
        <List data={expenseList} navigation={navigation} />
      </View>
    </ScrollView>
  );
}

export default ExpensesScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 30,
  },
});
