import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/sheet1.jpg")}/>
        <Text style={{ fontSize: 30 }} > {"\n"}Software Engineering {"\n"}{"\n"}</Text>
        <Text style={{ fontSize: 20 }}>ราคา : 30 บาท</Text>
        <Text style={{ fontSize: 15 }}>รายละเอียด : shdbkvjlfdvnmklajsghfjcefcnpire</Text>
        <Text style={{ fontSize: 15 }}>ยอดขาย : 3 {"\n"}{"\n"}</Text>
        <Text style={{ fontSize: 20 }}>Rating</Text>
        <Text style={{ fontSize: 15 }}>ความถูกต้อง : 0000</Text>
        <Text style={{ fontSize: 15 }}>ความสวยงาม : 00</Text>
        <Text style={{ fontSize: 15 }}>ความเข้าใจ : 00000{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        <Button title="Buy" style={styles.btn} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  btn: {
    borderRadius: 1,
    borderColor: "#92AFF3",
    width: 50,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
});