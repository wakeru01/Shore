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
  const [boughtSheet, setBoughtSheet] = React.useState([]);
  useEffect(() => {
    const didMount = async () => {
      let keepSheet = []
      let boughtSheets = []
      const db = firebase.firestore()
      const user = firebase.auth().currentUser
      console.log(user.uid)
      const userDocs = await db.collection('users').doc(user.uid).get()
      const docs = await db.collectionGroup('sheets').get()

      for (const s of docs.docs) {
        let facultyDocs
        let branchDocs
        if (s.data().faculty) {
          const facultyRef = db.collection('faculty').doc(s.data().faculty)
          facultyDocs = await facultyRef.get()
          branchDocs = await facultyRef.collection('branch').doc(s.data().branch).get()
        }

        if (s.data().userid === user.uid) {
          keepSheet = [...keepSheet, {
            ...s.data(),
            id: s.id,
            faculty: facultyDocs ? facultyDocs.data() : {},
            branch: branchDocs ? branchDocs.data() : {}
          }]
        }
        // ดึง user มา แล้วเทียบว่า boughtSheets มี id ไหม
        // console.log(userDocs.data().boughtSheets)
        // console.log(s.id)
        if (userDocs.exists && userDocs.data().boughtSheet && userDocs.data().boughtSheet.includes(s.id)) {
          boughtSheets = [...boughtSheets, {
            ...s.data(),
            id: s.id,
            faculty: facultyDocs ? facultyDocs.data() : {},
            branch: branchDocs ? branchDocs.data() : {}
          }]
        }
      }
      console.log({ boughtSheets })
      setBoughtSheet(boughtSheets)
      setSheet(keepSheet)
    }
    didMount()
  }, []);
  const renderShell = ({ item, index }) => (
    <ScrollView>
      <View style={styles.gridTile}>
        <View style={styles.imageGride}>
          <Image style={styles.pic} source={require("../../assets/file.png")} />
        </View>
        <View style={styles.detailGride}>
          <Text style={styles.header}>วิชา : {item.subject}</Text>
          <Text>คณะ : {item.faculty.name || 'ไม่ระบุคณะ'}</Text>
          <Text>ภาควิชา : {item.branch.name || 'ไม่ระบุภาควิชา'}</Text>
          <Text>ปีการศึกษา : {item.year || 'ไม่ระบุปีการศึกษา'}</Text>
          <Text>ภาคเรียนที่ : {item.semester || 'ไม่ระบุภาคเรียน'}</Text>
          <Text>ราคา : {item.price} บาท</Text>
        </View>
        <View style={styles.detailPrice}>
        <TouchableOpacity onPress={async () => {
            const db = firebase.firestore().collectionGroup("sheets").where('userid', '==', user.uid)
            const docs = await db.get()
            docs.forEach(async s => {
              if (s.id === item.id) {
                await s.ref.delete()
                const keepSheets = [...keepSheet]
                keepSheets.splice(index, 1)
                console.log(keepSheets)
                setSheet(prev => ([...keepSheet]))
              }
            })
          }}>
            <Image style={styles.picNext} source={require("../../assets/x.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  const renderBought = ({ item, index }) => (
    <ScrollView>
      <View style={styles.gridTile}>
        <View style={styles.imageGride}>
          <Image style={styles.pic} source={require("../../assets/file.png")} />
        </View>
        <View style={styles.detailGride}>
          <Text style={styles.header}>วิชา : {item.subject}</Text>
          <Text>คณะ : {item.faculty.name || 'ไม่ระบุคณะ'}</Text>
          <Text>ภาควิชา : {item.branch.name || 'ไม่ระบุภาควิชา'}</Text>
          <Text>ปีการศึกษา : {item.year || 'ไม่ระบุปีการศึกษา'}</Text>
          <Text>ภาคเรียนที่ : {item.semester || 'ไม่ระบุภาคเรียน'}</Text>
          <Text>ราคา : {item.price} บาท</Text>
        </View>
        <View style={styles.detailPrice}>
          <TouchableOpacity onPress={async () => {
            alert('ไม่สามารถลบชีทของคนอื่นได้')
            return
          }}>
            <Image style={styles.picNext} source={require("../../assets/x.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );


  const FirstRoute = () => (
    <View>
      <View style={[styles.scene, { backgroundColor: 'white' }]} />
      <ScrollView>
        <FlatList
          extraData={boughtSheet}
                    data={boughtSheet}
                    renderItem={renderBought}
                />
      </ScrollView>
    </View>
  );

  const SecondRoute = () => (
    <View>
      <View style={[styles.scene, { backgroundColor: 'white' }]} />
      <ScrollView>
        <FlatList
          extraData={keepSheet}
          data={keepSheet}
          renderItem={renderShell}
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