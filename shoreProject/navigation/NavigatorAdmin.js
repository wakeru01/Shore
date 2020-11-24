import React from "react";
// import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Entypo } from '@expo/vector-icons';
import HomeScreen from "../screens/main/HomeScreen";
import AddSheetScreen from "../screens/main/AddSheetScreen";
import NotificationScreen from "../screens/main/NotificationScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import RatingScreen from "../screens/RatingScreen";
import DetailScreen from "../screens/DetailScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import BuySheetScreen from "../screens/BuySheetScreen";
import ConditionScreen from "../screens/ConditionScreen";
import { createStackNavigator } from '@react-navigation/stack';
import {Button} from 'react-native-elements';

const Stack = createStackNavigator()

const HomeNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: "#3198cc", },
        headerTintColor: "white",
        
      }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Buysheet" component={BuySheetScreen} />
      </Stack.Navigator>
    )
}

export {HomeNavigator}

const AddSheetNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: "#3198cc", },
        headerTintColor: "white",
        
      }} initialRouteName="AddSheet">
        <Stack.Screen name="AddSheet" component={AddSheetScreen} />
        <Stack.Screen name="Condition" component={ConditionScreen} />
      </Stack.Navigator>
    )
}

export {AddSheetNavigator}

const NotificationNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: "#3198cc", },
        headerTintColor: "white",
        
      }} initialRouteName="Notification">
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Rating" component={RatingScreen} />
        <Stack.Screen name="Buysheet" component={BuySheetScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    )
}

export {NotificationNavigator}

const ProfileNavigator = (props) => {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: "#3198cc", },
        headerTintColor: "white",
        
      }} initialRouteName="Profile">
        <Stack.Screen name="Profile" component={ProfileScreen} 
          options={{
            headerRight: () => (
              <Button
                onPress={() => props.navigation.navigate('Login')}
                title="Log Out"
                // fontsize="10"
                color="#3198cc"
              />
            ),
        }}/>
        <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
      </Stack.Navigator>
    )
}

export {ProfileNavigator}
