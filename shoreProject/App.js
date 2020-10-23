import React from "react";
import { StyleSheet } from "react-native";
import DetailScreen from "./screens/DetailScreen";

export default function App() {
  // เพิ่มโค้ดส่วนนี้
  return(
    <DetailScreen/>
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