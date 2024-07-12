import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import RealmProvider from "../src/providers/Realm";

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <RealmProvider>
        <Stack screenOptions={{}}></Stack>
      </RealmProvider>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
