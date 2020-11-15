import React from "react";
import { StyleSheet } from "react-native";
import NavigatorUser from "./navigation/NavigatorUser";

export default function App() {
  // เพิ่มโค้ดส่วนนี้
  return(
    <NavigatorUser/>
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