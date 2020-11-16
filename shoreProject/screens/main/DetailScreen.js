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


        <View style={{paddingTop:50}}>
                <Button onPress={()=>{db.collection("users").add({
                    first: "s",
                    last: "Lovelace",
                    born: 1815
                })
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });}}
                title="เพิ่ม" />
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