import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/sheet1.jpg")}/>
        <View style={{
                        backgroundColor: "white",
                        paddingLeft: 50,
                        paddingRight:50,
                        marginBottom: 20,
                        marginTop:10
                    }}>
          <Text style={{ fontSize: 30, paddingTop: 20 }} >Software Engineering {"\n"}{"\n"}</Text>
          <Text style={{ fontSize: 20 }}>ราคา : 30 บาท</Text>
          <Text style={{ fontSize: 20 }}>ยอดขาย : 3</Text>
          <Text style={{ fontSize: 15 }}>รายละเอียด : shdbkvjlfdvnmklajsgvybenjkmfgirk,iojf,erthehfjcefcnpire {"\n"}{"\n"}</Text>
          <Text style={{ fontSize: 20 }}>Rating : </Text>
          <View style={{
                        padding: 10,
                        marginButtom: 50,
                        marginLeft: 20,
                    }}>
            <Text style={{ fontSize: 15 }}>ความถูกต้อง : 0000 {"\n"}</Text>
            <Text style={{ fontSize: 15 }}>ความสวยงาม : 00 {"\n"}</Text>
            <Text style={{ fontSize: 15 }}>ความเข้าใจ : 00000{"\n"}{"\n"}{"\n"}{"\n"}</Text>
            
          <Button title="ซื้อ"/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF5FA',
    alignItems: 'center'
  },
  logo: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
});