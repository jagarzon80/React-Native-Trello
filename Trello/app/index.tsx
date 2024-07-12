import { Stack } from "expo-router";
import TaskBoard from "../src/components/TaskBoard";

export default function Page() {
  return (
    <>
      <Stack.Screen options={{ title: "Project Board" }} />
      <TaskBoard />
    </>
  );
}
