import React from "react";
import { View, StyleSheet, Text, Dimensions, StatusBar, Image, SafeAreaView, Separator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TabView, SceneMap } from 'react-native-tab-view';
import { Button, Divider } from 'react-native-elements';

export default function Check({ navigation }) {
  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image style={styles.pic} source={require("../../assets/file.png")} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 22 }} >Thanida Samniang </Text>
            <Text style={{ fontSize: 17 }} >ทำการเพิ่มชีท</Text>
            <View style={{ flexDirection: 'row' }} >
              <Button
                title="ยืนยัน"
                onPress={() => Alert.alert('Left button pressed')}
              />
              <Button
                title="ติดต่อ"
                type="outline"
                color="#989a9c"
                onPress={() => Alert.alert('Right button pressed')}
                style={styles.button}
              />
            </View>
          </View>
        </View>
        <Divider style={{ backgroundColor: '#717680' }} />
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image style={styles.pic} source={require("../../assets/file.png")} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 22 }} >Rungwaraporn</Text>
            <Text style={{ fontSize: 17 }} >ทำการเพิ่มชีท</Text>
            <View style={{ flexDirection: 'row' }} >
              <Button
                title="ยืนยัน"
                // color="#92AFF3"
                onPress={() => Alert.alert('Left button pressed')}
              />
              <Button
                title="ติดต่อ"
                type="outline"
                color="#e63525"
                onPress={() => Alert.alert('Right button pressed')}
                style={styles.button}
              />
            </View>
          </View>
        </View>
        <Divider style={{ backgroundColor: '#717680' }} />
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
    width: 110,
    height: 110,
  },
  button: {
    marginLeft: 5
  },
});