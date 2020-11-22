import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button,TextInput, ImageBackground} from 'react-native';
import firebase from 'firebase/app'
import 'firebase/auth'

export default function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navToRegister = () => {
      props.navigation.push('Register')
  }
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(function(user) {
  //       if (user) {
  //         // User is signed in.
  //         console.log(user)
  //         props.navigation.replace('Main')
  //       } else {
  //         // No user is signed in.
  //       }
  //     })
  // })
  const navToMain = async () => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, pass)
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
          <Text style={styles.header}>Login</Text>

          <Text style={styles.text}>ชื่อผู้ใช้</Text>
          <TextInput style={styles.input} placeholder="เพิ่มเวลาที่นี่ ..."/>
          <Text style={styles.text}>รหัสผ่าน</Text>
          <TextInput style={styles.input} placeholder="เพิ่มเวลาที่นี่ ..."/>
        </View>
      </ImageBackground>
      {/* <Text>Login Screen</Text>
      <Text>Email:</Text><TextInput placeholder="insert email" onChangeText={email => setEmail(email)}/>
      <Text>Password:</Text><TextInput placeholder="insert Password" onChangeText={pass => setPass(pass)}/>

      <Button onPress={navToRegister} title="Register ?" />
      <Button onPress={navToMain} title="Login" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image:{
    flex:1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  popUpImage:{
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:"white",
    padding:10,
    marginLeft:30,
    marginRight:30,
  },
  header:{
    fontSize:30
  },
  input:{
    backgroundColor: "white",
    padding: 5,
    marginBottom: 10,
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius:3
  },
  text:{
    fontSize:18
  }
});
