import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput, ScrollView } from 'react-native';
import firebase from 'firebase/app'
import 'firebase/auth'
import { Button } from 'react-native-elements';
import * as DocumentPicker from 'expo-document-picker';

export default function RegisterScreen() {

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
        <Text style={styles.text}>ชื่อ :</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.text}>นามสกุล :</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.text}>เบอร์โทรศัพท์ :</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.text}>เลขที่บัญชี/พร้อมเพย์ :</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.text}>ชื่อบัญชี :</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.text}>รูปภาพ :</Text>
                <Button
                    title="เลือกรูปภาพ..."
                    color="#989a9c"
                    onPress={handleFilePick}
                    type="outline"
                />
        <Button  title="ยืนยัน" style={styles.button}/>
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
