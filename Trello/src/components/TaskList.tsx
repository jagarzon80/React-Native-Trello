import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TaskListItem from "./TaskListItem";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { description: "First task" },
    { description: "Second task" },
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo</Text>
      {/* The List of tasks */}
      <FlatList
        data={tasks}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <TaskListItem task={item} />}
      />
      {/* New task input */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101112",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
