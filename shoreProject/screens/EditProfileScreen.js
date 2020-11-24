import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import firebase from 'firebase/app'
import 'firebase/auth'
import { Button } from 'react-native-elements';
import * as DocumentPicker from 'expo-document-picker';

export default function EditProfileScreen(props) {
  const user = firebase.auth().currentUser;
  const str = user.displayName;
  const res = str.split(" ");
  const [tel, setTel] = useState('');
  const [account, setAccount] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [bank, setBank] = useState('');

  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [name, setName] = useState('');
  const [sur, setSur] = useState('');
  const [dataCollection, setDataCollection] = useState({})
  const [checkUser, setCheckUser] = useState('0');
  var db = firebase.firestore()

  // useEffect(()=>{
  //   const didMount=async () => {
  //     const querySnapshot = await db.collection("userCollection").doc(user.uid).get()
  //     if(querySnapshot.exist){
  //       setCheckUser('1')
  //     }
  //   }
  //   didMount()
  // }, []);

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
        <Text style={styles.text} >ชื่อ :</Text>
        <TextInput style={styles.input} placeholder={res[0]} onChangeText={pass => setName(pass)} />
        <Text style={styles.text} >นามสกุล :</Text>
        <TextInput style={styles.input} placeholder={res[1]} onChangeText={pass => setSur(pass)} />
        <Text style={styles.text} >เบอร์โทรศัพท์ :</Text>
        <TextInput style={styles.input} onChangeText={pass => setTel(pass)} />
        <Text style={styles.text} >เลขที่บัญชี/พร้อมเพย์ :</Text>
        <TextInput style={styles.input} onChangeText={pass => setAccountNo(pass)} />
        <Text style={styles.text} >ชื่อบัญชี :</Text>
        <TextInput style={styles.input} onChangeText={pass => setAccount(pass)}/>
        <Text style={styles.text} >ธนาคาร :</Text>
        <TextInput style={styles.input} onChangeText={pass => setBank(pass)}/>
        <Text style={styles.text}>รูปภาพ :</Text>
        <Button
          title="เลือกรูปภาพ..."
          color="#989a9c"
          onPress={handleFilePick}
          type="outline"
        />
        <Button title="ยืนยัน" style={styles.button} onPress={() => {
          user.updateProfile({
            displayName: name + ' ' + sur,
          }).then(function () {
            console.log(user.displayName)
          }).catch(function (error) {
          })
            db.collection("userCollection").doc(user.uid).set({
              tel: tel,
              accountNo: accountNo,
              account: account,
              bank: bank,
              uid: user.uid
            },{merge: true})
            .then(function() {
                console.log("Document successfully updated!");
            })
            .catch(function (error) {
              console.error("Error updating document: ", error);
            });
          props.navigation.pop()
        }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#EDF5FA',
    padding: 20,
  },
  container: {
    backgroundColor: "white",
    padding: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    fontSize: 30,
    margin: 20,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 20,
    borderColor: '#4893c2',
    borderWidth: 1,
    borderRadius: 3
  },
  text: {
    fontSize: 18,
    marginBottom: 7,
    marginTop: 7
  },
  button: {
    marginTop: 30,
    marginBottom: 20
  },
  headerText: {
    alignItems: 'center',
    justifyContent: 'center',
  }

});
