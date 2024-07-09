import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TaskBoard from "./src/components/TaskBoard";

export default function App() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <TaskBoard />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
