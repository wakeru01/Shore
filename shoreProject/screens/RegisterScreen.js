import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import firebase from 'firebase/app'
import 'firebase/auth'

export default function RegisterScreen(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const cond = async () => {
    if(pass != confirmPass){
      alert("Password and confirm password does not match")
      return
    }
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, pass)
      props.navigation.pop()
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    }
  }
  return (
    
    <View style={styles.container}>
      <Text>Register Screen</Text>
      <Text>Email:</Text><TextInput placeholder="insert email" onChangeText={email => setEmail(email)}/>
      <Text>Password:</Text><TextInput placeholder="insert password" onChangeText={pass => setPass(pass)}/>
      <Text>Confirm Password:</Text><TextInput placeholder="insert confirm password" onChangeText={confirmPass => setConfirmPass(confirmPass)}/>
      <Button onPress={cond} title="Register" />
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
