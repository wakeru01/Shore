import React, { useState } from 'react';
import { View, StyleSheet  } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker'
// import { Entypo } from '@expo/vector-icons'

import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';

const Home = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [country, setCountry] = React.useState('uk')

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.screen}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
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
    }
});

