import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image, Dimensions, StatusBar, TouchableOpacity, SafeAreaView } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import firebase from 'firebase/app'
import 'firebase/auth'
import EditProfileScreen from "../EditProfileScreen";
import { ScrollView } from "react-native-gesture-handler";

const FirstRoute = () => (
  <View>
    <View style={[styles.scene, { backgroundColor: 'white' }]} />
      <ScrollView>
      <View style={styles.gridTile}>
        <View style={styles.imageGride} style={{flexDirection : 'row'}}>
            <Image style={styles.file} source={require("../../assets/file.png")} />
            <Image style={styles.file} source={require("../../assets/file.png")} />
            <Image style={styles.file} source={require("../../assets/file.png")} />
        </View> 
      </View>
      </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View>
    <View style={[styles.scene, { backgroundColor: 'white' }]} />
    <ScrollView>
      <View style={styles.gridTile}>
        <View style={styles.imageGride} style={{flexDirection : 'row'}}>
            <Image style={styles.file} source={require("../../assets/file.png")} />
            <Image style={styles.file} source={require("../../assets/file.png")} />
            <Image style={styles.file} source={require("../../assets/file.png")} />
        </View> 
      </View>
      </ScrollView>
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };

export default function Profile({props}) {
  const user = firebase.auth().currentUser;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'ขาย' },
    { key: 'second', title: 'ซื้อ' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const navToEditProfile = () => {
    props.navigation.push('EditProfile')
  }

  // state = {
  //   photo: null,
  // }

  // handleChoosePhoto = () => {
  //   const options = {
  //     noData: true,
  //   }
  //   ImagePicker.launchImageLibrary(options, response => {
  //     if (response.uri) {
  //       this.setState({ photo: response })
  //     }
  //   })
  // }
  // const { photo } = this.state
  return (
    <View style={styles.screen}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'columm' }}>
            <Image style={styles.pic} source={require("../../assets/profile_icon.jpg")} />
            {/* {photo && (
              <Image
                source={{ uri: photo.uri }}
                style={{ width: 300, height: 300 }}
              />
            )}
            <Button style={{ fontSize: 15}} title="Choose Photo" onPress={this.handleChoosePhoto} /> */}
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
    width: 100,
    height: 100
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
    flex:4,
    flexDirection: 'row',
  },
  imageGride:{
      flex: 1,
  },
  header:{
      fontSize:18
  },
  file:{
    width: 120,
    height: 120
  },
});