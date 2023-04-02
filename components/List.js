import { View, Text, StyleSheet, Pressable } from "react-native";

import PriceText from "./ui/PriceText";

function List({ data, navigation }) {

  function sectionPressHandler(id) {
    navigation.navigate('ManageExpenses', {expenseId: id})
  }

  return data.map((element) => (
      <View style={styles.mainContainer} key={element.id}>
        <Pressable style={styles.pressableContainer} onPress={sectionPressHandler.bind(this, element.id)} android_ripple={{color: "#6349d6"}}>
          <View>
              <Text style={styles.text}>{element.title}</Text>
              <Text style={styles.text}>{`${element.date.getDate()}.${element.date.getMonth()}.${element.date.getFullYear()}`}</Text>
          </View>
          <View style={styles.priceContainer}>
              <PriceText style={styles.priceText}>{element.price}</PriceText>
          </View>
          </Pressable>
      </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginVertical: 7,
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#3418b7",
    elevation: 4,
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden"
  },
  pressableContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  text: {
    color: "#e9c2ff"
  },
  priceContainer: {
    backgroundColor: "#ffffff",
    padding: 10,
    width: 70,
    height: "100%",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  }
});
