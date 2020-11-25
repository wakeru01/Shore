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
        if (s.id === id) data = {
          ...s.data(),
          sheetid: s.id
        }
      })
      setSnap(data)
    })()
  }, [])

  const navToBuySheet = (payload, sheetid) => {
    props.navigation.push('BuySheet', {
      uid: payload,
      sheetid
    })
}
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
          <Text style={{ fontSize: 15 }}>ความถูกต้อง : 
            <Image style={styles.picStar} source={require("../assets/star.png")} />
            <Image style={styles.picStar} source={require("../assets/star.png")} />
            <Image style={styles.picStar} source={require("../assets/star.png")} />{"\n"}</Text>
          <Text style={{ fontSize: 15 }}>ความสวยงาม :
          <Image style={styles.picStar} source={require("../assets/star.png")} />
          <Image style={styles.picStar} source={require("../assets/star.png")} />{"\n"}</Text>
          <Text style={{ fontSize: 15 }}>ความเข้าใจ : 
          <Image style={styles.picStar} source={require("../assets/star.png")} />
          <Image style={styles.picStar} source={require("../assets/star.png")} />
          <Image style={styles.picStar} source={require("../assets/star.png")} />
          <Image style={styles.picStar} source={require("../assets/star.png")} />{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        </View>
        <Button title="ซื้อ" onPress={() => {navToBuySheet(snap.uid, snap.sheetid)}}></Button>
        
        
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
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  rating: {
    padding: 10,
    marginBottom: 50,
    marginLeft: 20,
  },
  picStar: {
    width: 20,
    height: 20,
},
});