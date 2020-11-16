import React, { useState } from 'react';
import { View, StyleSheet,Button, TextInput} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker'
import firebase from 'firebase/app'
import 'firebase/firestore'

const AddSheet = () => {

    var db = firebase.firestore();

    const [searchQuery, setSearchQuery] = React.useState('');
    const [country, setCountry] = React.useState('uk')
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.screen}>
            
            <View style={[styles.dropdown, {zIndex: 1}]}>
                <DropDownPicker
                    items={[
                        {label: 'ภาคเรียน', value: 'usa', hidden: true},
                        {label: 'UK', value: 'uk' },
                        {label: 'France', value: 'france',},
                    ]}
                    defaultValue={country}
                    containerStyle={{height: 40, flex: 1, marginTop: 10}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setState({
                        country: item.value
                    })}
                />
                <DropDownPicker
                    items={[
                        {label: 'USA', value: 'usa', hidden: true},
                        {label: 'UK', value: 'uk' },
                        {label: 'France', value: 'france',},
                    ]}
                    defaultValue={country}
                    containerStyle={{height: 40, flex: 1, marginTop: 10}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setState({
                        country: item.value
                    })}
                />
                </View>
                <View style={styles.dropdown}>
                <DropDownPicker
                    items={[
                        {label: 'USA', value: 'usa', hidden: true},
                        {label: 'UK', value: 'uk' },
                        {label: 'France', value: 'france',},
                    ]}
                    defaultValue={country}
                    containerStyle={{height: 40, flex: 1, marginTop: 10}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setState({
                        country: item.value
                    })}
                />
                <DropDownPicker
                    items={[
                        {label: 'USA', value: 'usa', hidden: true},
                        {label: 'UK', value: 'uk' },
                        {label: 'France', value: 'france',},
                    ]}
                    defaultValue={country}
                    containerStyle={{height: 40, flex: 1, marginTop: 10}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setState({
                        country: item.value
                    })}
                />
            </View>  
            <View style={{paddingTop:20}}>
                <View style={{paddingBottom:10}}>ราคา :</View>
                <TextInput style={{
                        backgroundColor: "white",
                        padding: 10,
                        marginBottom: 20,
                    }}
                />
                <View style={{paddingBottom:10}}>รายละเอียด :</View>
                <TextInput style={{
                        backgroundColor: "white",
                        padding: 10,
                        marginBottom: 10,
                        
                    }}
                    multiline
                    numberOfLines={6}
                />

            </View> 
            <View style={{paddingTop:50}}>
                <Button onPress={()=>{db.collection("users").add({
                    first: "s",
                    last: "Lovelace",
                    born: 1815
                })
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });}}
                title="เพิ่ม" />
            </View>
        </View>
    );
};
export default AddSheet;

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
    }
});

