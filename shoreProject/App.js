import React from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  // เพิ่มโค้ดส่วนนี้
  return(
    <HomeScreen/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});