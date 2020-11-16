import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function App() {
  // เพิ่มโค้ดส่วนนี้
  return(
    <View style={styles.screen}>
      <Text>notification</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
      backgroundColor: '#EDF5FA',
      flex: 1,
      padding: 20,
      paddingTop: 20,
  },
});