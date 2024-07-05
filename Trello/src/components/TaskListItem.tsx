import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function TaskListItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First Task</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  text: {
    color: "white",
  },
});
