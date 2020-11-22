import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput, ScrollView } from 'react-native';
import firebase from 'firebase/app'
import 'firebase/auth'
import { Button } from 'react-native-elements';

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
      props.navigation.push('Condition')
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    }
  }
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.headerText}>
      <Text style={styles.header}>สมัครสมาชิก</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>ชื่อ :</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.text}>นามสกุล :</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.text}>อีเมล :</Text>
        <TextInput style={styles.input} onChangeText={email => setEmail(email)}/>
        <Text style={styles.text}>รหัสผ่าน :</Text>
        <TextInput style={styles.input} secureTextEntry={true} onChangeText={pass => setPass(pass)}/>
        <Text style={styles.text}>ยืนยันรหัสผ่าน :</Text>
        <TextInput style={styles.input} secureTextEntry={true} onChangeText={confirmPass => setConfirmPass(confirmPass)}/>
        <Text style={styles.text}>เบอร์โทรศัพท์ :</Text>
        <TextInput style={styles.input}/>
        {/* <Text>Email:</Text><TextInput placeholder="insert email" onChangeText={email => setEmail(email)}/>
        <Text>Password:</Text><TextInput placeholder="insert password" onChangeText={pass => setPass(pass)}/>
        <Text>Confirm Password:</Text><TextInput placeholder="insert confirm password" onChangeText={confirmPass => setConfirmPass(confirmPass)}/> */}
        <Button onPress={cond} title="สมัครสมาชิก" style={styles.button}/>
     </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    backgroundColor: '#EDF5FA',
    padding: 20,
  },
  container: {
    backgroundColor: "white",
    padding:30,
    marginLeft:20,
    marginRight:20,
  },
  header:{
    fontSize:30,
    margin: 20,
  },
  input:{
    backgroundColor: "white",
    padding: 10,
    marginBottom: 20,
    borderColor: '#4893c2', 
    borderWidth: 1,
    borderRadius:3
  },
  text:{
    fontSize: 18, 
    marginBottom:7,
    marginTop:7
  },
  button:{
    marginTop:30,
    marginBottom:20
  },
  headerText:{
    alignItems: 'center',
    justifyContent: 'center',
  }
    
});
