import {Text, StyleSheet} from "react-native"

function PriceText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

export default PriceText;

const styles = StyleSheet.create({
    text: {
        color: "#402e92",
        fontWeight: "bold",
        fontSize: 16,
    }
})
