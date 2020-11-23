import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image, Dimensions, StatusBar, TouchableOpacity } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import firebase from 'firebase/app'
import 'firebase/auth'
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

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#9dd4f5' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#77c4f2' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

export default function Profile(props) {
  const user = firebase.auth().currentUser;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Buy' },
    { key: 'second', title: 'Sell' },
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
});