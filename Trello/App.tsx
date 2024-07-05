import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import TaskListItem from "./src/components/TaskListItem";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TaskListItem />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
