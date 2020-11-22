import React, { useState , useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, Image  } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker'
import { Searchbar } from 'react-native-paper';
import firebase from 'firebase/app'
import 'firebase/firestore'

const Home = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [faculty, setFaculty] = React.useState('')
    const [stateFaculty, setStateFaculty] = React.useState(false)
    const [branch, setBranch] = React.useState('')
    const [year, setYear] = React.useState([])
    const [semester, setSemester] = React.useState([])
    const [datafaculty, setDatafaculty] = useState({})
    const [databranch, setDatabranch] = useState({})
    const [sheets, setSheets] = useState('')
    const [dataSheets, setDatasheets] = useState({})
    const [selectedyear, setSelectedyear] = useState({})
    const [selectedsemester, setSelectedsemester] = useState({})
    // const [searchQuery, setSearchQuery] = React.useState('');
    const [country, setCountry] = React.useState('uk')
    var db = firebase.firestore()
    const onChangeSearch = query => setSearchQuery(query);

    useEffect(async () => {
        const querySnapshot = await db.collection("faculty").get()
        const faculty = {}
        querySnapshot.forEach((doc) => {
            faculty[doc.id] = doc.data()
        });
        setDatafaculty(faculty);
    }, []);

    return (
        <View style={styles.screen}>
            <ScrollView>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <View style={[styles.dropdown, {zIndex: 1}]}>
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
                    // onStateChange={ }
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
                        const querySnapshot = await db.collection("faculty").doc(faculty).collection("branch").doc(item.value).collection("sheets").get();
                        const sheets = {};
                        let year = [];
                        querySnapshot.forEach((doc) => {
                            console.log(doc.data())
                            sheets[doc.id] = doc.data()
                            if(!year.includes(doc.data().year)){
                                year = [...year, doc.data().year]
                                console.log(year)
                            }
                        });
                        year.sort()
                        setYear(year)
                        setDatasheets(sheets)
                    }}
                />
                </View>
                <View style={styles.dropdown}>
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
                        let semester = []
                        setSelectedyear(item.value)
                        const thisyear = Object.keys(dataSheets).filter((id) =>{
                            return dataSheets[id].year == item.value
                        })
                        thisyear.forEach((id) => {
                            if(!semester.includes(dataSheets[id].semester)){
                                semester = [...semester, dataSheets[id].semester]
                        }})
                        setSemester(semester)
                        // const querySnapshot = await db.collection("faculty").doc(item.value).collection("branch").get();
                        // const branch = {};
                        // querySnapshot.forEach((doc) => {
                        //     branch[doc.id] = doc.data()
                        // });
                        // setDatabranch(branch)
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
            <View style={styles.grideTile}>
                <View style={styles.imageGride}>
                    <Image style={styles.pic} source={require("../../assets/file.png")} />
                </View>
                <View style={styles.detailGride}>
                    <Text style={styles.header}>hnimi</Text>
                    <Text>guyhjk</Text>
                </View>
                <View style={styles.detailPrice}>
                    <Text style={styles.price}>50฿</Text>
                </View>
            </View>
            </ScrollView>  
        </View>
    );
};
export default Home;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#EDF5FA',
        flex: 1,
        padding: 20,
        paddingTop: 20,
    },
    dropdown:{
        // flex: 1,
        flexDirection: "row",
        height: 50,
    },
    grideTile:{
        backgroundColor: "white",
        padding:10,
        marginTop:7,
        borderRadius:3,
        flexDirection:'row'
    },
    imageGride:{
        flex: 1,
    },
    detailGride:{
        flex: 3
    },
    detailPrice:{
        flex:1,
        flexDirection:'row-reverse'
    },
    price:{
        color:"red"
    },
    pic:{
        width:55,
        height:55,
    },
    header:{
        fontSize:20
    }

});

