import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import TaskListItem from "./TaskListItem";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { description: "First task" },
    { description: "Second task" },
  ]);

  const [newTask, setNewTask] = useState("");

  const createTask = () => {
    setTasks([...tasks, { description: newTask }]);
    setNewTask("");
  };

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
      <TextInput
        onChangeText={setNewTask}
        placeholder="New Task"
        placeholderTextColor="gray"
        style={styles.textinput}
        value={newTask}
      />
      <Button title="Add task" onPress={createTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101112",
    padding: 10,
    borderRadius: 5,
    gap: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  textinput: {
    color: "white",
    padding: 15,
    backgroundColor: "#1D2125",
    borderRadius: 5,
  },
});
