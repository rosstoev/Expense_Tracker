import { ScrollView, View, StyleSheet, Text } from "react-native";
import { useLayoutEffect, useContext } from "react";

import TotalSection from "../components/TotalSection";
import List from "../components/List";
import IconButton from "../components/ui/IconButton";
import { ExpenseContext } from "../store/expenseContext";
import { getLastDaysDate } from "../util/date";

function ExpensesScreen({route, navigation}) {
  const {recent} = route.params;
  const expenseContext = useContext(ExpenseContext);
  const expenses = expenseContext.expenses;
  const recentDate = getLastDaysDate(new Date(), 7);

  function iconPressHandler() {
    navigation.navigate('ManageExpenses')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (<IconButton icon="add" color="white" size={26} onPress={iconPressHandler}/>)
      }
    })
  }, [navigation, iconPressHandler])

  const expenseList = recent ? expenses.filter((element) => element.date > recentDate) : expenses;
  const total = expenseList.reduce((currentSum, element) => (currentSum + element.price), 0);

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
        marginVertical: 30
    }
})
