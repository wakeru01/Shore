import React, { useState } from 'react';
import { View, StyleSheet,Button  } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker'
import { Input } from 'react-native-elements';

const Home = () => {
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
                <Input
                  placeholder='ราคา :'
                />

                <Input
                  placeholder='รายละเอียด :'
                />


{/* 
                <Input
                  placeholder="Comment"
                  onChangeText={value => this.setState({ comment: value })}
                  /> */}

            </View> 
            <View style={{paddingTop:50}}>
            <Button
            title="เพิ่ม" />
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

