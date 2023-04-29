import { View, Pressable, Text, StyleSheet } from "react-native";

function Button({ text, flat, onPress }) {
  return (
    <View style={[styles.container, flat && styles.activeButtonContainer]}>
      <Pressable
        style={styles.pressable}
        onPress={onPress}
        android_ripple={flat && { color: "#9162ff" }}
      >
        <Text style={[styles.text, flat ? styles.activeButtonText : styles.cancelText]}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    minWidth: 120,
    marginVertical: 10,
  },
  activeButtonContainer: {
    backgroundColor: "#3e04c3",
    borderRadius: 4,
    overflow: "hidden",
  },
  pressable: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  text: {
    textAlign: "center",
  },
  cancelText: {
    color: "#6655a9",
  },
  activeButtonText: {
    color: "#fde9ff",
  }
});
