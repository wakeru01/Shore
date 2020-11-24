import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { Searchbar } from 'react-native-paper';
import firebase from 'firebase/app'
import 'firebase/firestore'


import 'firebase/firestore'
import { FlatList } from 'react-native-gesture-handler';


const Home = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    var db = firebase.firestore()
    
    const [keepSheet, setSheet] = React.useState([]);
    const [filterSheet, setFilterSheet] = React.useState([]);

    const onChangeSearch = query => {
        setSearchQuery(query)
        console.log(query)
        if (query !== '') {
            const filtered = keepSheet.filter(s => {
                return s.subject.toLowerCase().includes(query.toLowerCase())
            })
            setFilterSheet(filtered)
        } else {
            setFilterSheet(keepSheet)
        }
    }

    useEffect(() => {
        const didMount = async () => {
            let keepSheet = []
            const db = firebase.firestore()
            const docs = await db.collectionGroup('sheets').get()
            docs.forEach(s => {
                keepSheet = [...keepSheet, {...s.data(), id: s.id}]
            })
            console.log(keepSheet)
            setSheet(keepSheet)
            setFilterSheet(keepSheet)
        }
        didMount()
    }, []);
    const navDetail = (payload) => {
        props.navigation.push('Detail', {
            id: payload
        })
    }

    const renderItem = ({ item }) => (
        <View style={styles.gridTile}>
            <View style={styles.imageGride}>
                <Image style={styles.pic} source={require("../../assets/file.png")} />
            </View>
            <View style={styles.detailGride}>
                <Text style={styles.header}>{item.subject}</Text>
                <View style={styles.ratingStr}>
                    <Image style={styles.picProfile} source={require("../../assets/dot.png")} />
                    <Text> ปีการศึกษา : {item.year}  ภาคเรียนที่ : {item.semester}</Text>
                </View>
                <View style={styles.ratingStr}>
                    <Text>Rating : </Text>
                    <Image style={styles.picStar} source={require("../../assets/star.png")} />
                    <Image style={styles.picStar} source={require("../../assets/star.png")} />
                    <Image style={styles.picStar} source={require("../../assets/star.png")} />
                </View>
            </View>
            <View style={styles.detailPrice}>
                <Text style={styles.price}>{item.price}฿</Text>
                <TouchableOpacity onPress={() => {
                    navDetail(item.id)
                }}>
                <Image style={styles.picNext} source={require("../../assets/next.png")} />
                </TouchableOpacity>

            </View>
        </View>
    );

    return (
        <View style={styles.screen}>
            <ScrollView>
                <Searchbar
                    placeholder="ค้นหา"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
                
                <FlatList
                    data={filterSheet}
                    renderItem={renderItem}
                />
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
    dropdown: {
        flexDirection: "row",
        height: 50,
    },
    gridTile: {
        backgroundColor: "white",
        padding: 10,
        paddingLeft: 2,
        marginTop: 7,
        borderRadius: 3,
        flexDirection: 'row'
    },
    imageGride: {
        flex: 1,
    },
    detailGride: {
        flex: 3
    },
    picNext: {
        width: 20,
        height: 20,
    },
    detailPrice: {
        flexDirection: 'column'
    },
    price: {
        color: "red",
        flex: 1,
    },
    pic: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 18
    },
    picProfile: {
        width: 15,
        height: 15,
        marginRight: 3
    },
    picStar: {
        width: 20,
        height: 20,
    },
    ratingStr: {
        flexDirection: 'row',
        marginTop: 5
    }

});

