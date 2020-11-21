import React from "react";
import { View, StyleSheet, Text, Dimensions, StatusBar, Image, Button, SafeAreaView, Separator } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';

export default function App() {
  // เพิ่มโค้ดส่วนนี้
  return(
    <View style={styles.screen}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image style={styles.pic} source={require("../../assets/file.png")} />
        </View>
        <View style={{flexDirection: 'colum'}}>
          <Text style={{ fontSize: 22 }} >Thanida Samniang</Text>
          <Text style={{ fontSize: 17 }} >ทำการซื้อชีท</Text> 
          <View style={{flexDirection: 'row'}} >
            <Button
              title="ยืนยัน"
              color="#92AFF3"
              onPress={() => Alert.alert('Left button pressed')}
            />
            <Button
              title="ติดต่อ"
              color="#e8edfa"
              onPress={() => Alert.alert('Right button pressed')}
            />
          </View>
        </View>
      </View>
      {/* <Separator /> */}
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image style={styles.pic} source={require("../../assets/file.png")} />
        </View>
        <View style={{flexDirection: 'colum'}}>
          <Text style={{ fontSize: 17 }} >ยืนยันการซื้อชีท</Text> 
          <View style={{flexDirection: 'row'}} >
            <Button
              title="ให้คะแนนชีท"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
        </View>
      </View>
      {/* <Separator /> */}
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image style={styles.pic} source={require("../../assets/file.png")} />
        </View>
        <View style={{flexDirection: 'colum'}}>
          <Text style={{ fontSize: 22 }} >Thanida Samniang</Text>
          <Text style={{ fontSize: 17 }} >ทำการโอนเงินคืนแล้ว</Text> 
          <View style={{flexDirection: 'row'}} >
            <Button
              title="ยืนยัน"
              color="#92AFF3"
              onPress={() => Alert.alert('Left button pressed')}
            />
            <Button
              title="ติดต่อ"
              color="#e8edfa"
              onPress={() => Alert.alert('Right button pressed')}
            />
          </View>
        </View>
      </View>
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
  pic: {
    width: 110,
    height: 110,
  },
  // separator: {
  //   marginVertical: 8,
  //   borderBottomColor: '#737373',
  //   borderBottomWidth: StyleSheet.hairlineWidth,
  // },
});

