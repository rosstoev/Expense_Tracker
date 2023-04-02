import { View, StyleSheet, Text } from "react-native";

import PriceText from "./ui/PriceText";

function TotalSection({title, price}) {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View>
        <PriceText>${price.toFixed(2)}</PriceText>
      </View>
    </View>
  );
}

export default TotalSection;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#dfd4fb",
    elevation: 4,
    alignItems: "center",
    justifyContent: "space-between"
  },
  titleText: {
    color: "#5c4593"
  }
});
