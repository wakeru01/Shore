import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, CheckBox } from 'react-native';
import firebase from 'firebase/app'
import 'firebase/auth'
import { Button } from 'react-native-elements';
import * as DocumentPicker from 'expo-document-picker';


export default function RegisterScreen(props) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const handleFilePick = async () => {
        const fileResponse = await DocumentPicker.getDocumentAsync();
        console.log(fileResponse);
    }
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.headerText}>
      <Text style={styles.header}>ข้อตกลงและเงื่อนไข</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>สงวนลิขสิทธิ์ส่งต่อชีทที่ได้รับ ตามพระราชบัญญัติลิขสิทธิ์ พ.ศ.2537
        ห้ามคัดลอก ทำซำ้ ดัดแปลงหีรือนำส่วนใดส่วนหนึ่งในชีทไปเผยแพร่
        ไม่ว่ากรณีใดๆทั้งสิ้น โดยไม่ได้รับอนุญาต จาก Shore หากฝ่าฝืน
        จะดำเนินคดีตามกฎหมาย</Text>
     </View>
     <View style={styles.checkboxContainer}>
        <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            style={styles.checkBox}
        />
        <Text style={styles.label}>ยอมรับเงื่อนไขการใช้บริการ</Text>
      </View>
     <Button  title="ยืนยัน" onPress={()=>{
        props.navigation.navigate('Home')
     }}style={styles.button}/>
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
    padding:15,
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
    fontSize: 16, 
    marginBottom:7,
    marginTop:7
  },
  button:{
    marginTop:20,
    marginBottom:20,
    marginLeft:20,
    marginRight:20,
  },
  headerText:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBox:{
    alignSelf: "center",
    marginLeft:20,
    marginTop:20,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  label:{
    marginLeft:20,
    marginTop:20,
    fontSize:18
  }
    
});
