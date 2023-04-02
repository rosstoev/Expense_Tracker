import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ExpensesScreen from "./screens/ExpensesScreen";
import ExpenseContextProvider from "./store/expenseContext";
import ManageExpenseScreen from "./screens/ManageExpenseScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#3e04c3" },
        headerTintColor: "#ffe6ff",
        tabBarStyle: { backgroundColor: "#3e04c3" },
        tabBarActiveTintColor: "#f4bd1a",
        tabBarInactiveTintColor: "#988997",
      }}
      sceneContainerStyle={{ backgroundColor: "#2c0588" }}
    >
      <Tab.Screen
        name="Recent"
        component={ExpensesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass-outline" size={size} color={color} />
          ),
        }}
        initialParams={{ recent: true }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={ExpensesScreen}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
        initialParams={{ recent: false }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpenseContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#3e04c3" },
              headerTintColor: "#ffe6ff",
              contentStyle: { backgroundColor: "#2c0588" },
            }}
          >
            <Stack.Screen
              name="Tab navigation"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="RecentExpenses" component={ExpensesScreen} initialParams={{recent: true}} />
            <Stack.Screen name="AllExpenses" component={ExpensesScreen} initialParams={{recent: false}} />
            <Stack.Screen name="ManageExpenses" component={ManageExpenseScreen} options={{title: 'Manage Expenses'}} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
