import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  ScrollView} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';
import { Button } from 'react-native-elements';

export default class App extends React.Component {
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
      }
  render() {
    return (
        <View style={styles.screen}>
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.rating}>
                <Text style={styles.text}>ความถูกต้อง :</Text>
                <AirbnbRating style={styles.star}/>
                <View style={styles.line}/>
            </View>
            <View style={styles.rating}>
                <Text style={styles.text}>ความสวยงาม :</Text>
                <AirbnbRating style={styles.star}/>
                <View style={styles.line}/>
            </View>
            <View style={styles.rating}>
                <Text style={styles.text}>ความเข้าใจ :</Text>
                <AirbnbRating style={styles.star}/>
                <View style={styles.line}/>
            </View>
            <Button style={styles.button} title="ยืนยัน"/>
            </View>
        </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#EDF5FA',
        flex: 1,
        padding: 10,
        paddingTop: 10,
    },
    container:{
        backgroundColor: "white",
        padding:20,
        marginLeft:30,
        marginRight:30,
    },
    rating:{
        marginTop: 20
    },
    line:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop:5,
        marginBottom:15
    },
    text:{
        fontSize: 18, 
        marginBottom:7
    },
    star:{
        alignContent:'center',
        alignItems:'center',
    },
    button:{
        marginTop: 50
    }
});


