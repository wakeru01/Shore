import React from "react";
import { StyleSheet } from "react-native";
import NavigatorAdmin from "./navigation/NavigatorAdmin";

export default function App() {
  // เพิ่มโค้ดส่วนนี้
  return(
    <NavigatorAdmin/>
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