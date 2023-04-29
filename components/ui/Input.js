import { View, Text, TextInput, StyleSheet } from "react-native";

function Input({ label, style , configuration, isValid }) {
  return (
    <View style={[styles.inputColContainer, style]}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput style={[styles.colInput, isValid ? styles.valid : styles.error]} {...configuration} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputColContainer: {
    marginHorizontal: 4,
    marginVertical: 8
  },
  inputLabel: {
    color: "#ffffffff",
    fontSize: 16,
    padding: 10,
  },
  valid: {
    backgroundColor: "#ffffffff",
  },
  error: {
    backgroundColor: '#FF9494'
  },
  colInput: {
    padding: 6,
    borderRadius: 4,
    fontSize: 18,
  },


});
