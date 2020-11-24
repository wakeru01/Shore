import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image, Dimensions, StatusBar, TouchableOpacity } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { FlatList } from 'react-native-gesture-handler';

// import PhotoUpload from 'react-native-photo-upload';

// const Profile = () => {
// };

// export default Profile;

// export default function App() {
//   // เพิ่มโค้ดส่วนนี้
//   return(
//     <View style={styles.screen}>
//       <View style={{flexDirection: 'row'}}>
//         <View><Image style={styles.pic} source={require("../../assets/profile_icon.jpg")} /></View>
//         <Text style={{ fontSize: 22 }} >Thanida Samniang</Text>
//         <Image style={styles.edit} source={require("../../assets/edit.png")} />
//       </View>
//     </View>
        
//   )
// }
  // var db = firebase.firestore()
    
  //   const [keepSheet, setSheet] = React.useState([]);
  // useEffect(() => {
  //   const didMount = async () => {
  //       let keepSheet = []
  //       const db = firebase.firestore()
  //       const docs = await db.collectionGroup('sheets').get()
  //       docs.forEach(s => {
  //           keepSheet = [...keepSheet, {...s.data(), id: s.id}]
  //       })
  //       console.log(keepSheet)
  //       setSheet(keepSheet)
  //       setFilterSheet(keepSheet)
  //   }
  //   didMount()
  // }, []);
  // const navDetail = (payload) => {
  //   props.navigation.push('Detail', {
  //       id: payload
  //   })
  // }
//   const renderItem = ({ item }) => (
//     <View style={styles.gridTile}>
//         <View style={styles.imageGride}>
//             <Image style={styles.pic} source={require("../../assets/file.png")} />
//         </View>
//         <View style={styles.detailGride}>
//             <Text style={styles.header}>{item.subject}</Text>
//             <View style={styles.ratingStr}>
//                 <Image style={styles.picProfile} source={require("../../assets/dot.png")} />
//                 <Text> ปีการศึกษา : {item.year}  ภาคเรียนที่ : {item.semester}</Text>
//             </View>
//             <View style={styles.ratingStr}>
//                 <Text>Rating : </Text>
//                 <Image style={styles.picStar} source={require("../../assets/star.png")} />
//                 <Image style={styles.picStar} source={require("../../assets/star.png")} />
//                 <Image style={styles.picStar} source={require("../../assets/star.png")} />
//             </View>
//         </View>
//         <View style={styles.detailPrice}>
//             <Text style={styles.price}>{item.price}฿</Text>
//             <TouchableOpacity onPress={() => {
//                 navDetail(item.id)
//             }}>
//             <Image style={styles.picNext} source={require("../../assets/next.png")} />
//             </TouchableOpacity>

//         </View>
//     </View>
// );

const FirstRoute = () => (
  <View>
    <View style={[styles.scene, { backgroundColor: 'white' }]} />
    <View style={styles.gridTile}>
            <View style={styles.imageGride}>
                <Image style={styles.pic} source={require("../../assets/file.png")} />
            </View>
            <View style={styles.detailGride}>
                <Text style={styles.header}>วิชา : Mobile Device</Text>
                <Text>คณะ : เทคโนโลยีสารสนเทศ</Text>
                <Text>ภาควิชา : เทคโนโลยีสารสนเทศ</Text>
                <Text>ปีการศึกษา : 2018</Text>
                <Text>ภาคเรียนที่ : 2</Text>
                <Text>ราคา : 50 บาท</Text>
            </View>
            <View style={styles.detailPrice}>
            <TouchableOpacity onPress={() => {
                }}>
                <Image style={styles.picNext} source={require("../../assets/x.png")} />
            </TouchableOpacity>
            </View>
        </View>
  </View>
);

const SecondRoute = () => (
  <View>
    <View style={[styles.scene, { backgroundColor: 'white' }]} />
    <View style={styles.gridTile}>
            <View style={styles.imageGride}>
                <Image style={styles.pic} source={require("../../assets/file.png")} />
            </View>
            <View style={styles.detailGride}>
                <Text style={styles.header}>วิชา : Human Design</Text>
                <Text>คณะ : เทคโนโลยีสารสนเทศ</Text>
                <Text>ภาควิชา : เทคโนโลยีสารสนเทศ</Text>
                <Text>ปีการศึกษา : 2018</Text>
                <Text>ภาคเรียนที่ : 2</Text>
                <Text>ราคา : 50 บาท</Text>
            </View>
            <View style={styles.detailPrice}>
            <TouchableOpacity onPress={() => {
                }}>
                <Image style={styles.picNext} source={require("../../assets/x.png")} />
            </TouchableOpacity>
            </View>
        </View>
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };

export default function Profile(props) {
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
  return (
    <View style={styles.screen}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <TouchableOpacity >
            <Image style={styles.pic} source={require("../../assets/profile_icon.jpg")} />
          </TouchableOpacity>
        </View>
          <Text style={{ fontSize: 22}}>{user.displayName}</Text>
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
    alignItems:'center',
    justifyContent:'center'
  },
  edit: {
    width: 13,
    height: 13,
    marginLeft:10,
  },
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
  gridTile: {
    flex:1,
    backgroundColor: "white",
    padding: 10,
    paddingLeft: 2,
    marginTop: 7,
    borderRadius: 3,
    flexDirection: 'row'
  },
  header:{
      fontSize:18
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