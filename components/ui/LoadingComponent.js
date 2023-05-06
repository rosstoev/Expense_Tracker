import { View, ActivityIndicator, StyleSheet } from "react-native";

function LoadingComponent() {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}

export default LoadingComponent;

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
