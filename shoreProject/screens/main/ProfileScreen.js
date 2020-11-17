import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default function App() {
  // เพิ่มโค้ดส่วนนี้
  return(
    <View style={styles.screen}>
      <View style={{flexDirection: 'row'}}>
        <View><Image style={styles.pic} source={require("../../assets/profile_icon.jpg")} /></View>
        <Text style={{ fontSize: 22 }} >Thanida Samniang</Text>
        <Image style={styles.edit} source={require("../../assets/edit.png")} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: 180, height: 55, backgroundColor: 'powderblue'}} >
          <Text style={{ fontSize: 20 }}>BUY</Text>
        </View>
        <View style={{width: 180, height: 55, backgroundColor: 'skyblue'}} >
          <Text style={{ fontSize: 20 }}>SELL</Text>
        </View>
      </View>
      <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
      backgroundColor: '#EDF5FA',
      flex: 1,
      padding: 10,
      paddingTop: 20,
  },
  pic: {
    // resizeMode: "cover",
    width: 110,
    height: 110,
  },
  edit: {
    width: 21,
    height: 21,
  }
});