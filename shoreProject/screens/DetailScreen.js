import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Image,
  ScrollView} from 'react-native';
import { Button } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
        <ScrollView>
        <Image style={styles.logo} source={require("../../assets/sheet1.jpg")}/>
        <View style={styles.container}>
          <Text style={{ fontSize: 30, paddingTop: 20 }} >Software Engineering {"\n"}{"\n"}</Text>
          <Text style={{ fontSize: 20 }}>ราคา : 30 บาท</Text>
          <Text style={{ fontSize: 20 }}>ยอดขาย : 3</Text>
          <Text style={{ fontSize: 15 }}>รายละเอียด : shdbkvjlfdvnmklajsgvybenjkmfgirk,iojf,erthehfjcefcnpire {"\n"}{"\n"}</Text>
          <Text style={{ fontSize: 20 }}>Rating : </Text>
          <View style={styles.rating}>
            <Text style={{ fontSize: 15 }}>ความถูกต้อง : 0000 {"\n"}</Text>
            <Text style={{ fontSize: 15 }}>ความสวยงาม : 00 {"\n"}</Text>
            <Text style={{ fontSize: 15 }}>ความเข้าใจ : 00000{"\n"}{"\n"}{"\n"}{"\n"}</Text>
          </View>
          <Button title="ซื้อ"/>
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "white",
    paddingLeft: 60,
    paddingRight:60,
    paddingBottom:100,
    marginTop:10
  },
  logo: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  rating:{
    padding: 10,
    marginButtom: 50,
    marginLeft: 20,
  }
});