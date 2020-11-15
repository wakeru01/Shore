import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/sheet1.jpg")}/>
        <Text style={{ fontSize: 30 }} >Software Engineering {"\n"}{"\n"}</Text>
        <Text style={{ fontSize: 20 }}>ราคา : 30 บาท    ยอดขาย : 3</Text>
        <Text style={{ fontSize: 15 }}>รายละเอียด : shdbkvjlfdvnmklajsghfjcefcnpire {"\n"}{"\n"}</Text>
        <Text style={{ fontSize: 20 }}>Rating</Text>
        <Text style={{ fontSize: 15 }}>ความถูกต้อง : 0000</Text>
        <Text style={{ fontSize: 15 }}>ความสวยงาม : 00</Text>
        <Text style={{ fontSize: 15 }}>ความเข้าใจ : 00000{"\n"}{"\n"}{"\n"}{"\n"}</Text>

        <View style={[{ width: "90%", margin: 10, backgroundColor: "#92AFF3" }]}>
          <Button
            onPress={this.buttonClickListener}
            title="Buy"
            color="#92AFF3"
          />
        </View> 
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
  logo: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
});