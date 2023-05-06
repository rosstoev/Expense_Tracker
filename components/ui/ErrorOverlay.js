import { View, StyleSheet, Text } from "react-native";

function ErrorOverlay({message}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>An error occured</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        marginVertical: 250,
        marginHorizontal: 50,
        borderRadius: 4,
    },
    title: {
        fontSize: 20,
        padding: 5,
        color: "#c22c2c"
    },
    message: {
        fontSize: 14,
        color: "#c22c2c",
    }
})
