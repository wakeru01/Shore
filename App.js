import React from "react";
import { StyleSheet } from "react-native";
import UserNavigator from "./navigation/UserNavigator";
import AdminNavigator from "./navigation/AdminNavigator"

export default function App() {
  return <UserNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});