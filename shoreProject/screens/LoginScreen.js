import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';
import firebase from 'firebase/app'
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
        await firebase.auth().signInWithEmailAndPassword(email, pass)
      } catch (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
      }
    
}
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Text>Email:</Text><TextInput placeholder="insert email" onChangeText={email => setEmail(email)}/>
      <Text>Password:</Text><TextInput placeholder="insert Password" onChangeText={pass => setPass(pass)}/>

      <Button onPress={navToRegister} title="Register ?" />
      <Button onPress={navToMain} title="Login" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
