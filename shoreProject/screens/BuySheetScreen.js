import React, { useState } from 'react';
import { View, 
    StyleSheet,
    TextInput,
    Text,
    ScrollView} from "react-native";

import * as DocumentPicker from 'expo-document-picker';
import { Button } from 'react-native-elements';
import firebase from 'firebase/app'
import 'firebase/firestore'

const BuySheet = (props) => {

    var db = firebase.firestore();

    const handleFilePick = async () => {
        const fileResponse = await DocumentPicker.getDocumentAsync();
        console.log(fileResponse);
    }

    const navTohome = () => {
        props.navigation.push('Home')
    }
    
    return (
        <View style={styles.screen}>
            <ScrollView>
            <View style={styles.popUpText}>
                <Text style={styles.header}>รายละเอียดการโอนเงิน</Text>
            </View>
            <View style={styles.showText}>
                <Text style={styles.text}>เลขที่บัญชี/พร้อมเพย์ :</Text>
                <View style={styles.textSole}>61070190</View>
                <View style={styles.line}/>

                <Text style={styles.text}>ชื่อบัญชี :</Text>
                <View style={styles.textSole}>นางสาวรุ่งวราพร คุตะนนท์</View>
                <View style={styles.line}/>

                <Text style={styles.text}>ธนาคาร :</Text>
                <View style={styles.textSole}>กรุงไทย</View>
                <View style={styles.line}/>

                <Text style={styles.text}>หลักฐานการโอนเงิน :</Text>
                <Button
                    title="เพิ่มสลิป..."
                    color="#989a9c"
                    onPress={handleFilePick}
                    type="outline"
                />
                <Text style={styles.text}>เวลา :</Text>
                <TextInput style={styles.input} placeholder="เพิ่มเวลาที่นี่ ..."/>
                <Text style={styles.text}>ราคา :</Text>
                <TextInput style={styles.input} placeholder="เพิ่มราคาที่นี่ ..."/>
                <Button title="ยืนยัน" onPress={navTohome}/>
            </View>
            </ScrollView>
        </View>
    );
};
export default BuySheet;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#EDF5FA',
        flex: 1,
        padding: 10,
        paddingTop: 10,
    },
    input:{
        backgroundColor: "white",
        padding: 10,
        marginBottom: 20,
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius:3
    },
    text:{
        fontSize: 18, 
        marginBottom:7,
        marginTop:7
    },
    header:{
        fontSize: 25, 
        padding: 20
    },
    popUpText:{
        alignContent: 'center', 
        alignItems: 'center'
    },
    showText:{
        backgroundColor: "white",
        padding:20,
        marginLeft:30,
        marginRight:30
    },
    textSole:{
        alignItems:'center',
        alignContent:'center',
        marginButtom: 20
    },
    line:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop:5,
        marginBottom:15
    }

});

