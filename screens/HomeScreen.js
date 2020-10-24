import React from 'react';
import { View, StyleSheet } from "react-native";
import { Searchbar } from 'react-native-paper';

const Search = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
  
    const onChangeSearch = query => setSearchQuery(query);
    
    return (
        <View style={styles.screen}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            /> 
        </View>
    );
  };
export default Search;

const styles = StyleSheet.create({
    screen:{
        backgroundColor: '#EDF5FA',
        flex:1,
        padding: 20,
        paddingTop: 20
    }
});
  
