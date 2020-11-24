import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase'
// import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

export default function DetailScreen(props) {

  const { id } = props.route.params;
  const [snap, setSnap] = React.useState(null);
  
  useEffect(() => {
    (async () => {
      var db = firebase.firestore()
      var data = {};
      const docs = await db.collectionGroup('sheets').get()
      docs.forEach(s => {
        if (s.id === id) data = s.data()
      })
      setSnap(data)
    })()
  }, [])
  const navBuysheet = () => {
    props.navigation.push('Buysheet')
  }
  // console.log(snap === null);
  if(snap === null){
    return <Text>Loading</Text>
  }
  
  return (
    <ScrollView>
      <Image style={styles.logo} source={require("../assets/sheet1.jpg")} />
      <View style={styles.container}>
  <Text style={{ fontSize: 30, paddingTop: 20 }} >{snap.subject}{"\n"}{"\n"}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 20, flex: 1 }}>ราคา : {snap.price} บาท</Text>
        </View>
        <Text style={{ fontSize: 15 }}>รายละเอียด : {snap.detail}{"\n"}{"\n"}</Text>
        <Text style={{ fontSize: 20 }}>Rating : </Text>
        <View style={styles.rating}>
          <Text style={{ fontSize: 15 }}>ความถูกต้อง : 0000 {"\n"}</Text>
          <Text style={{ fontSize: 15 }}>ความสวยงาม : 00 {"\n"}</Text>
          <Text style={{ fontSize: 15 }}>ความเข้าใจ : 00000{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        </View>
        <Button
          title="ซื้อ"
          onPress={navBuysheet}
        />
      </View>
    </ScrollView>
  );
  

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 100,
    marginTop: 10
  },
  logo: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  rating: {
    padding: 10,
    marginButtom: 50,
    marginLeft: 20,
  }
});