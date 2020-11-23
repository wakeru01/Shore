import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TextInput, ImageBackground} from 'react-native';
import firebase from 'firebase/app'
import { Button } from 'react-native-elements';
import 'firebase/auth'

export default function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navToRegister = () => {
      props.navigation.push('Register')
  }
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log(user)
          props.navigation.replace('Main')
        } else {
          // No user is signed in.
        }
      })
  })
  const navToMain = async () => {
    try {
        // await firebase.auth().signInWithEmailAndPassword(email, pass)
        props.navigation.replace('Main')
      } catch (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
      }
    
}
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/book6.png')} style={styles.image} >
        <View style={styles.popUpImage}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>เข้าสู่ระบบ</Text>
          </View>
          <TextInput style={styles.input} onChangeText={email => setEmail(email)} placeholder="ชื่อผู้ใช้หรืออีเมล"/>
          <TextInput style={styles.input} secureTextEntry={true} onChangeText={pass => setPass(pass)} placeholder="รหัสผ่าน"/>
          <Button onPress={navToMain} style={styles.button} title="เข้าสู่ระบบ" />
          <View style={styles.line}/>
          <View style={styles.signUp}>
            <Text style={styles.text}>ไม่มีบัญชีผู้ใช้ใช่หรือไม่?  </Text>
            <Text style={styles.textSign} onPress={navToRegister}>สมัครสมาชิก</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signUp:{
    flexDirection:'row',
    justifyContent: "center",
    alignItems:"center",
  },
  image:{
    flex:1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  popUpImage:{
    // justifyContent: "center",
    // alignItems:"center",
    backgroundColor:"white",
    padding:20,
    marginLeft:50,
    marginRight:50,
    borderRadius: 10
  },
  textHeader:{
    fontSize:30,
    marginBottom:20,
  },
  header:{
    justifyContent: "center",
    alignItems:"center",
  },
  input:{
    backgroundColor: "white",
    padding:10,
    paddingBottom: 12,
    paddingTop:12,
    marginBottom: 10,
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius:3
  },
  line:{
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginTop:5,
    marginBottom:15
  },
  button:{
    marginTop: 5,
    marginBottom: 20
  },
  textSign:{
    fontSize: 15,
    color: "blue"
  },
  text:{
    fontSize:15
  }

});
