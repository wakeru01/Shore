import React, { useEffect, useState } from 'react';
import { View, 
    StyleSheet,
    TextInput, 
    Text,
    ScrollView} from "react-native";
import { Button } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker'
import * as DocumentPicker from 'expo-document-picker';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'
// import axios from 'axios'
const AddSheet = () => {
    const user = firebase.auth().currentUser
    const [searchQuery, setSearchQuery] = React.useState('');
    const [faculty, setFaculty] = React.useState('')
    const [stateFaculty, setStateFaculty] = React.useState(false)
    const [branch, setBranch] = React.useState('')
    const [year, setYear] = React.useState([2015,2016,2017,2018,2019,2020])
    const [semester, setSemester] = React.useState([1,2])
    const [datafaculty, setDatafaculty] = useState({})
    const [databranch, setDatabranch] = useState({})
    const [sheets, setSheets] = useState('')
    const [dataSheets, setDatasheets] = useState({})
    const [selectedyear, setSelectedyear] = useState({})
    const [selectedsemester, setSelectedsemester] = useState({})
    const [price, setPrice] = React.useState()
    const [detail, setDetail] = React.useState('')
    const sheetRef = firebase.firestore().collection('sheets').doc()
    const [sheetpic, setSheetpic] = useState({})
    const [sheetex, setSheetex] = useState({})

    var db = firebase.firestore()
    // const handleFilePick = async () => {
    //     const fileResponse = await DocumentPicker.getDocumentAsync();
    //     console.log(fileResponse);
    // }

    useEffect(async () => {
        const querySnapshot = await db.collection("faculty").get()
        const faculty = {}
        querySnapshot.forEach((doc) => {
            faculty[doc.id] = doc.data()
        });
        setDatafaculty(faculty);
    }, []);

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.screen}>
            <ScrollView>
            <View style={[styles.dropdown, {zIndex: 2}]}>
                <DropDownPicker
                    items={[
                        ...Object.keys(datafaculty).map(key => ({label: datafaculty[key].name, value: key }))
                    ]}
                    containerStyle={{height: 40, flex: 1, marginTop: 10}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={ async (item) => {
                        setFaculty(item.value)
                        const querySnapshot = await db.collection("faculty").doc(item.value).collection("branch").get();
                        const branch = {};
                        querySnapshot.forEach((doc) => {
                            branch[doc.id] = doc.data()
                        });
                        setDatabranch(branch)
                    }}
                />
                <DropDownPicker
                    items={[
                        ...Object.keys(databranch).map(key => ({label: databranch[key].name, value: key }))
                    ]}
                    containerStyle={{height: 40, flex: 1, marginTop: 10}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={ async (item) => {
                        setBranch(item.value)
                    }}
                />
                </View>
                <View style={[styles.dropdown, {zIndex: 1}]}>
                <DropDownPicker
                    items={[
                        ...year.map(y => ({label: y.toString(), value: y }))
                    ]}
                    containerStyle={{height: 40, flex: 1, marginTop: 10}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={ async (item) => {
                        setSelectedyear(item.value)
                    }}
                />
                <DropDownPicker
                    items={[
                        ...semester.map(s => ({label: s.toString(), value: s }))
                    ]}
                    containerStyle={{height: 40, flex: 1, marginTop: 10}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => setSelectedsemester(item.value)}
                />
            </View>  
            <View style={{paddingTop:10}}>
            <Text style={styles.text}>เอกสารชีท :</Text>
                <Button 
                type="outline"
                title="เพิ่มเอกสารชีท..."
                color="#989a9c"
                onPress={async () => {
                    
                    const sheetPic = await DocumentPicker.getDocumentAsync({ multiple: true });
                    console.log(sheetPic);
                    setSheetpic(sheetPic)
                }}
                style={{weight: 20}}
            />
                <Text style={styles.text}>ราคา:</Text>
                <TextInput style={styles.input}
                    onChangeText={(text) => setPrice(text)}
                />
                <Text style={styles.text}>รายละเอียด :</Text>
                <TextInput style={styles.input}
                    multiline 
                    numberOfLines={7} 
                    onChangeText={(text) => setDetail(text)}
                />

            </View> 
            <Text style={styles.text}>ตัวอย่าง :</Text>
            <Button
                title="เพิ่มตัวอย่างชีท..."
                color="#989a9c"
                // onPress={handleFilePick}
                onPress={async () => {
                    const sheetEx = await DocumentPicker.getDocumentAsync();
                    console.log(sheetEx);
                    setSheetex(sheetEx)
                }}
                type="outline"
            />
            <View style={{paddingTop:50}}>
                <Button title="เพิ่ม" onPress={ async () => {
                    db.collection("faculty").doc(faculty).collection("branch").doc(branch).collection("sheets").doc().set({
                        price:price,
                        detail:detail,
                        semester: selectedsemester,
                        year: selectedyear,
                        userid: user.uid
                    })
                    .then(function() {
                        console.log("Document successfully written!");
                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
                    });
                    console.log('sheetPic', sheetpic.uri)
                    firebase.storage().ref(`sheets/${sheetRef.id}/sheet.png`).putString(sheetpic.uri, 'data_url')
                    firebase.storage().ref(`sheets/${sheetRef.id}/sheetex.png`).putString(sheetex.uri, 'data_url')
                }}/>
            </View>
            </ScrollView>
        </View>
    );
};
export default AddSheet;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#EDF5FA',
        flex: 1,
        padding: 20,
    },
    dropdown:{
        // flex: 1,
        flexDirection: "row",
        height: 50,
    },
    text:{
        paddingBottom:5, 
        fontSize:18, 
        marginTop:10
    },
    input:{
        backgroundColor: "white",
        padding: 10,
        marginBottom: 10,
        borderRadius:3
    }
});

