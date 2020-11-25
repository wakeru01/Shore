import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image, Dimensions, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { FlatList } from 'react-native-gesture-handler';

export default function Profile(props) {
  var db = firebase.firestore()

  const [keepSheet, setSheet] = React.useState([]);
  useEffect(() => {
    const didMount = async () => {
      let keepSheet = []
      const db = firebase.firestore()
      const user = firebase.auth().currentUser
      const docs = await db.collectionGroup('sheets').where('userid', '==', user.uid).get()
      docs.forEach(s => {
        keepSheet = [...keepSheet, { ...s.data(), id: s.id }]
      })
      console.log(keepSheet)
      setSheet(keepSheet)
    }
    didMount()
  }, []);
  const renderBuy = ({ item }) => (
    <ScrollView>
      <View style={styles.gridTile}>
        <View style={styles.imageGride}>
          <Image style={styles.pic} source={require("../../assets/file.png")} />
        </View>
        <View style={styles.detailGride}>
          <Text style={styles.header}>วิชา : {item.subject}</Text>
          <Text>คณะ : เทคโนโลยีสารสนเทศ</Text>
          <Text>ภาควิชา : เทคโนโลยีสารสนเทศ</Text>
          <Text>ปีการศึกษา : 2018</Text>
          <Text>ภาคเรียนที่ : 2</Text>
          <Text>ราคา : 50 บาท</Text>
        </View>
        <View style={styles.detailPrice}>
          <TouchableOpacity onPress={() => {
            // console.log(item);
            firebase.firestore().collectionGroup("sheets").doc(item.id).delete()
            // console.log(item.id);
            // db.collection("sheets").doc("DC").delete().then(function () {
            //   console.log("Document successfully deleted!");
            // }).catch(function (error) {
            //   console.error("Error removing document: ", error);
            // });
          }}>
            <Image style={styles.picNext} source={require("../../assets/x.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  // const renderItem = ({ item }) => (
  //   <ScrollView>
  //   <View style={styles.gridTile}>
  //           <View style={styles.imageGride}>
  //               <Image style={styles.pic} source={require("../../assets/file.png")} />
  //           </View>
  //           <View style={styles.detailGride}>
  //               <Text style={styles.header}>วิชา : {item.subject}</Text>
  //               <Text>คณะ : เทคโนโลยีสารสนเทศ</Text>
  //               <Text>ภาควิชา : เทคโนโลยีสารสนเทศ</Text>
  //               <Text>ปีการศึกษา : 2018</Text>
  //               <Text>ภาคเรียนที่ : 2</Text>
  //               <Text>ราคา : 50 บาท</Text>
  //           </View>
  //           <View style={styles.detailPrice}>
  //           <TouchableOpacity onPress={() => {
  //               }}>
  //               <Image style={styles.picNext} source={require("../../assets/x.png")} />
  //           </TouchableOpacity>
  //           </View>
  //       </View>
  //       </ScrollView>
  // );


  const FirstRoute = () => (
    <View>
      <View style={[styles.scene, { backgroundColor: 'white' }]} />
      <ScrollView>
        <Text>cvghbjk</Text>
        {/* <FlatList
                    data={keepSheet}
                    renderItem={renderItem}
                /> */}
      </ScrollView>
    </View>
  );

  const SecondRoute = () => (
    <View>
      <View style={[styles.scene, { backgroundColor: 'white' }]} />
      <ScrollView>
        <FlatList
          data={keepSheet}
          renderItem={renderBuy}
        />
      </ScrollView>
    </View>
  );

  const initialLayout = { width: Dimensions.get('window').width };

  const user = firebase.auth().currentUser;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'ซื้อ' },
    { key: 'second', title: 'ขาย' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const navToEditProfile = () => {
    props.navigation.push('EditProfile')
  }
  console.log(user)
  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <TouchableOpacity >
              <Image style={styles.pic} source={require("../../assets/profile_icon.jpg")} />
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 22 }}>{user.displayName}</Text>
          <TouchableOpacity onPress={navToEditProfile}>
            <Image style={styles.edit} source={require("../../assets/edit.png")} />
          </TouchableOpacity>
        </View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          style={styles.container}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#EDF5FA',
    flex: 1,
    padding: 10,
    paddingTop: 20,
  },
  pic: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  edit: {
    width: 13,
    height: 13,
    marginLeft: 10,
  },
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
  gridTile: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    paddingLeft: 2,
    marginTop: 7,
    borderRadius: 3,
    flexDirection: 'row'
  },
  header: {
    fontSize: 18
  },
  imageGride: {
    flex: 1,
  },
  detailGride: {
    flex: 2
  },
  picNext: {
    width: 10,
    height: 10,
  },
  detailPrice: {
    flexDirection: 'column'
  },
  pic: {
    width: 100,
    height: 100
  },
});