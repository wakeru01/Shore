import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput, ScrollView } from 'react-native';
import firebase from 'firebase/app'
import 'firebase/auth'
import { Button } from 'react-native-elements';
import * as DocumentPicker from 'expo-document-picker';

export default function RegisterScreen() {
  const user = firebase.auth().currentUser;
  const [tel, setTel] = useState('');
  const [account, setAccount] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [name, setName] = useState('');
  const [sur, setSur] = useState('');
  var db = firebase.firestore()

  const handleFilePick = async () => {
    const fileResponse = await DocumentPicker.getDocumentAsync();
    console.log(fileResponse);
  }
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.headerText}>
      <Text style={styles.header}>แก้ไขโปรไฟล์</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text} onChangeText={pass => setName(pass)}>ชื่อ :</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.text} onChangeText={pass => setSur(pass)}>นามสกุล :</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.text} onChangeText={pass => setTel(pass)}>เบอร์โทรศัพท์ :</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.text} onChangeText={pass => setAccountNo(pass)}>เลขที่บัญชี/พร้อมเพย์ :</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.text} onChangeText={pass => setAccount(pass)}>ชื่อบัญชี :</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.text}>รูปภาพ :</Text>
          <Button
            title="เลือกรูปภาพ..."
            color="#989a9c"
            onPress={handleFilePick}
            type="outline"
          />
        <Button title="ยืนยัน" style={styles.button} onPress={()=>{
          user.updateProfile({
              displayName: name + ' ' + sur,
            }).then(function() {
              console.log(user.displayName)
            }).catch(function(error) {
              // An error happened.
          })
          db.collection("userCollection").doc().set({
            name: name,
            sur: sur,
            tel: tel,
            accountNo: accountNo,
            account: account
          })
          .then(function() {
              console.log("Document successfully written!");
          })
          .catch(function(error) {
              console.error("Error writing document: ", error);
          });
          }}/>
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
