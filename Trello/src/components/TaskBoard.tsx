import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import TaskList from "./TaskList";

export default function TaskBoard() {
  return (
    <View style={{ padding: 10, flex: 1 }}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#8711c1", "#2472fc"]}
        style={StyleSheet.absoluteFill}
      />
      <TaskList />
    </View>
  );
}
