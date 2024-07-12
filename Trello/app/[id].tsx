import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const TaskDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Task Details" }} />
      <Text style={styles.text}>Id: {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default TaskDetails;
