import { SafeAreaView, StyleSheet, View } from "react-native";
import TaskList from "./src/components/TaskList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 10, marginVertical: 15 }}>
        <TaskList />
      </View>
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
