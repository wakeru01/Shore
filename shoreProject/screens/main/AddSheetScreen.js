import React, { useState } from 'react';
import { View, StyleSheet,Button, TextInput} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker'
import * as DocumentPicker from 'expo-document-picker';
import firebase from 'firebase/app'
import 'firebase/firestore'

const AddSheet = () => {

    var db = firebase.firestore();

    const [searchQuery, setSearchQuery] = React.useState('');
    const [faculty, setFaculty] = React.useState('it')
    const [branch, setBranch] = React.useState('dbsa')
    const [year, setYear] = React.useState('1')
    const [semester, setSemester] = React.useState('1')

    const handleFilePick = async () => {
        const fileResponse = await DocumentPicker.getDocumentAsync();
        console.log(fileResponse);
    }
    // this.state = {
    //     faculty: ['it'],
    //     branch: ['dbsa'],
    //     year: ['1'],
    //     semester: ['1'],

    // }
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.screen}>
            
            <View style={[styles.dropdown, {zIndex: 2}]}>
                <DropDownPicker
                    items={[
                        {label: 'it', value: 'it', hidden: true},
                        {label: 'engineer', value: 'engineer' },
                        {label: 'art', value: 'art',},
                    ]}
                    defaultValue={faculty}
                    containerStyle={{height: 40, flex: 1, marginTop: 10}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setState({
                        faculty: item.value
                    })}
                />
                <DropDownPicker
                    items={[
                        {label: 'dbsa', value: 'dbsa', hidden: true},
                        {label: 'it', value: 'it' },
                        {label: 'multi', value: 'multi',},
                    ]}
                    defaultValue={branch}
                    containerStyle={{height: 40, flex: 1, marginTop: 10}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setState({
                        branch: item.value
                    })}
                />
                </View>
                <View style={[styles.dropdown, {zIndex: 1}]}>
                <DropDownPicker
                    items={[
                        {label: '1', value: '1', hidden: true},
                        {label: '2', value: '2' },
                        {label: '3', value: '3',},
                        {label: '4', value: '4',},

                    ]}
                    defaultValue={year}
                    containerStyle={{height: 40, flex: 1, marginTop: 10}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setState({
                        year: item.value
                    })}
                />
                <DropDownPicker
                    items={[
                        {label: '1', value: '1', hidden: true},
                        {label: '2', value: '2' },
                        {label: 'summer', value: 'summer',},
                    ]}
                    defaultValue={semester}
                    containerStyle={{height: 40, flex: 1, marginTop: 10}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setState({
                        semester: item.value
                    })}
                />
            </View>  
            <View style={{paddingTop:20}}>
            <View style={{paddingBottom:5}}>เอกสารชีท :</View>
                <Button 
                title="เพิ่มเอกสารชีท..."
                color="#989a9c"
                onPress={handleFilePick}
                style={{weight: 20}}
                
            />
                <View style={{paddingBottom:5, marginTop: 20,}}>ราคา :</View>
                <TextInput style={{
                        backgroundColor: "white",
                        padding: 10,
                        marginBottom: 20,
                    }}
                    placeholder="เพิ่มราคาที่นี่ ..."
                />
                <View style={{paddingBottom:5}}>รายละเอียด :</View>
                <TextInput style={{
                        backgroundColor: "white",
                        padding: 10,
                        marginBottom: 10,
                    }}
                    placeholder="เพิ่มรายละเอียดที่นี่ ..."
                    multiline
                    numberOfLines={7}
                />

            </View> 
            <View style={{paddingBottom:5}}>ตัวอย่าง :</View>
            <Button
                title="เพิ่มตัวอย่างชีท..."
                color="#989a9c"
                onPress={handleFilePick}
            />
            <View style={{paddingTop:100}}>
                <Button 
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

