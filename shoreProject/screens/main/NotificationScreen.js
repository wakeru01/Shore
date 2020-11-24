import React from "react";
import { View, StyleSheet, Text, Dimensions, StatusBar, Image, SafeAreaView, Separator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TabView, SceneMap } from 'react-native-tab-view';
import { Button, Divider } from 'react-native-elements';


export default function Notification({ navigation }) {
  // const renderItem = ({ item }) => (
  //   <View style={styles.gridTile}>
  //     <View style={styles.gridTile}>
  //       <View style={styles.imageGride}>
  //         <Image style={styles.pic} source={require("../../assets/file.png")} />
  //       </View>
  //       <View style={styles.detailGride}>
  //         <Text style={{ fontSize: 18 }} >Thanida Samniang</Text>
  //         <Text style={{ fontSize: 14 }} >ทำการโอนเงินคืนแล้ว</Text>
  //         <View style={{ flexDirection: 'row', marginTop: 5 }} >
  //           <Button
  //             title="ยืนยัน"
  //           />
  //           <Button
  //             title="ติดต่อ"
  //             type="outline"
  //             color="#e63525"
  //             style={styles.button}
  //             onPress={() => navigation.navigate('Buysheet')}
  //           />
  //         </View>
  //       </View>
  //     </View>
  //   </View>
  // );


  // const renderRat = ({ item }) => (
  //   <View style={styles.gridTile}>
  //     <View style={styles.imageGride}>
  //       <Image style={styles.pic} source={require("../../assets/file.png")} />
  //     </View>
  //     <View style={styles.detailGride}>
  //       <View style={{ flexDirection: 'colum' }}>
  //         <Text style={{ fontSize: 18 }} >Thanida Samniang</Text>
  //         <Text style={{ fontSize: 17 }} >ยืนยันการซื้อชีท</Text>
  //         <View style={{ flexDirection: 'row' }} >
  //           <Button
  //             title="ให้คะแนนชีท"
  //             onPress={() => navigation.navigate('Rating')}
  //           />
  //         </View>
  //       </View>
  //     </View>
  //   </View>
  // );

  return (
    <View style={styles.screen}>
      <ScrollView>
        {/* <FlatList
            data={}
            renderItem={renderItem}
        /> */}
      </ScrollView>
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
    width: 80,
    height: 80,
  },
  button: {
    marginLeft: 5,
  },
  gridTile: {
    backgroundColor: "white",
    padding: 10,
    paddingLeft: 2,
    marginTop: 7,
    borderRadius: 3,
    flexDirection: 'row'
  },
  imageGride: {
    flex: 1,
  },
  detailGride: {
    flex: 3
  },

});

