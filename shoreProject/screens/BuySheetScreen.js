import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    ScrollView
} from "react-native";

import * as DocumentPicker from 'expo-document-picker';
import { Button } from 'react-native-elements';
import firebase from 'firebase/app'
import 'firebase/firestore'

const BuySheet = (props) => {

    var db = firebase.firestore();
    const user = firebase.auth().currentUser;
    const { uid, sheetid } = props.route.params
    const [snap, setSnap] = React.useState(null);
    const [time, setTime] = useState('');
    const [price, setPrice] = useState('');
    useEffect(() => {
        const didMount = async () => {
          var db = firebase.firestore()
          var data = {};
          const docs = await db.collectionGroup('userCollection').get()
          docs.forEach(s => {
            if (s.uid === uid) data = s.data()
          })
          setSnap(data)
        }
        didMount()
    }, [])
        
   
    const handleFilePick = async () => {
        const fileResponse = await DocumentPicker.getDocumentAsync();
        console.log(fileResponse);
    }

    const navTohome = () => {
        db.collection("users").doc(user.uid).set({
            time: time,
            price: price,
            boughtSheet: firebase.firestore.FieldValue.arrayUnion(sheetid) ,
            uid: user.uid
          }, {merge: true})
          .then(function() {
            props.navigation.popToTop()
          })
          
    }
    if (snap === null) {
        return <Text>Loading</Text>
    }
    return (
        <View style={styles.screen}>
            <ScrollView>
                <View style={styles.popUpText}>
                    <Text style={styles.header}>รายละเอียดการโอนเงิน</Text>
                </View>
                <View style={styles.showText}>
                    <Text style={styles.text}>เลขที่บัญชี/พร้อมเพย์ :</Text>
                    <View style={styles.textSole}>{snap.accountNo}</View>
                    <View style={styles.line} />

                    <Text style={styles.text}>ชื่อบัญชี :</Text>
                    <View style={styles.textSole}>{snap.account}</View>
                    <View style={styles.line} />

                    <Text style={styles.text}>ธนาคาร :</Text>
                    <View style={styles.textSole}>{snap.bank}</View>
                    <View style={styles.line} />

                    <Text style={styles.text}>หลักฐานการโอนเงิน :</Text>
                    <Button
                        title="เพิ่มสลิป..."
                        color="#989a9c"
                        onPress={handleFilePick}
                        type="outline"
                    />
                    <Text style={styles.text}>เวลา :</Text>
                    <TextInput style={styles.input} placeholder="เพิ่มเวลาที่นี่ ..." onChangeText={pass => setTime(pass)} />
                    <Text style={styles.text}>ราคา :</Text>
                    <TextInput style={styles.input} placeholder="เพิ่มราคาที่นี่ ..." onChangeText={pass => setPrice(pass)} />
                    <Button title="ยืนยัน" onPress={navTohome} />
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
    input: {
        backgroundColor: "white",
        padding: 10,
        marginBottom: 20,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 3
    },
    text: {
        fontSize: 18,
        marginBottom: 7,
        marginTop: 7
    },
    header: {
        fontSize: 25,
        padding: 20
    },
    popUpText: {
        alignContent: 'center',
        alignItems: 'center'
    },
    showText: {
        backgroundColor: "white",
        padding: 20,
        marginLeft: 30,
        marginRight: 30
    },
    textSole: {
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 20
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop: 5,
        marginBottom: 15
    }

});

