import React, { useState , useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker'
import { Searchbar } from 'react-native-paper';
import firebase from 'firebase/app'
import 'firebase/firestore'
import sheet1 from '../assets/sheet1.jpg';

import 'firebase/firestore' 


const Home = (props) => {
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
    // const [searchQuery, setSearchQuery] = React.useState('')
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

    const navDetail = () => {
        props.navigation.push('Detail')
    }

    return (
        <View style={styles.screen}>
            <ScrollView>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
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
                    // onStateChange={ }
                />
                <DropDownPicker
                    items={[
                        ...Object.keys(databranch).map(key => ({label: databranch[key].name, value: key }))
                    ]}
                    containerStyle={{height: 40, flex: 1, marginTop: 10}}
                    style={{backgroundColor: '#fafafa'}, {zIndex: 2}}
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
                    style={{backgroundColor: '#fafafa'}, {zIndex: 1}}
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
                    }}
                />
                <DropDownPicker
                    items={[
                        ...semester.map(s => ({label: s.toString(), value: s }))
                    ]}
                    containerStyle={{height: 40, flex: 1, marginTop: 10}}
                    style={{backgroundColor: '#fafafa'}, {zIndex: 1}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => setSelectedsemester(item.value)}
                />
            </View>
            <TouchableOpacity onPress={navToDetail}>
            <View style={styles.grideTile}>
                <View style={styles.imageGride}>
                    <Image style={styles.pic} source={require("../../assets/file.png")} />
                </View>
                <View style={styles.detailGride}>
                    <Text style={styles.header}>Moblie Programming</Text>
                    <View style={styles.ratingStr}>
                        <Image style={styles.picProfile} source={require("../../assets/profile_icon.jpg")} />
                        <Text>Rungwaraporn khuthanon</Text>
                    </View>
                    <View style={styles.ratingStr}>
                        <Text>Rating : </Text>
                        <Image style={styles.picStar} source={require("../../assets/star.png")} />
                        <Image style={styles.picStar} source={require("../../assets/star.png")} />
                        <Image style={styles.picStar} source={require("../../assets/star.png")} />
                    </View>
                </View>
                <View style={styles.detailPrice}>
                    <Text style={styles.price}>50฿</Text>
                    <TouchableOpacity onPress={navDetail}>
                        <Image style={styles.picNext} source={require("../../assets/next.png")} /> 
                    </TouchableOpacity>
                    
                </View>
            </View>
            </TouchableOpacity>
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
        flexDirection: "row",
        height: 50,
    },
    grideTile:{
        backgroundColor: "white",
        padding:10,
        paddingLeft:2,
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
    picNext:{
        width:20,
        height:20,
    },
    detailPrice:{
        flexDirection:'column'
    },
    price:{
        color:"red",
        flex:1,
    },
    pic:{
        width:70,
        height:70,
        justifyContent:'center',
        alignItems:'center'
    },
    header:{
        fontSize:18
    },
    picProfile:{
        width:20,
        height:20,
        marginRight:3
    },
    picStar:{
        width:20,
        height:20,
    },
    ratingStr:{
        flexDirection:'row',
        marginTop:5
    }

});

