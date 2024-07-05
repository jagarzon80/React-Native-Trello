import { SafeAreaView, StyleSheet } from "react-native";
import TaskListItem from "./src/components/TaskListItem";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TaskListItem task={{ description: "First task" }} />
      <TaskListItem task={{ description: "Second task" }} />
      <TaskListItem task={{ description: "Third task" }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
