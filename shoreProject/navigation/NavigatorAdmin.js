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
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const HomeNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: "#3198cc", },
        headerTintColor: "white",
        
      }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
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
        <Stack.Screen name="Add Sheet" component={AddSheetScreen} />
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
      </Stack.Navigator>
    )
}

export {NotificationNavigator}

const ProfileNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: "#3198cc", },
        headerTintColor: "white",
        
      }} initialRouteName="Profile">
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      </Stack.Navigator>
    )
}

export {ProfileNavigator}



// const NotificationNavigator = createStackNavigator(
//     {
//       Notifications: {
//         screen: NotificationScreen,
//       },
//     },
//     {
//       defaultNavigationOptions: {
//         headerStyle: { backgroundColor: "#4a148c", },
//         headerTintColor: "white",
//         headerShown: false
//       },
//     }
// );


// const AdminTabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeNavigator,
//       navigationOptions:{
//         tabBarIcon: (tabInfo) => {
//           return (<Entypo name="home" size={26} color="black" />);
//         },
//       },
//     },
//     Notofication: {
//       screen: NotificationNavigator,
//       navigationOptions:{
//         tabBarIcon: (tabInfo) => {
//           return (<Entypo name="bell" size={26} color="black" />);
//         },
//       },
//     },
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: "darkblue",
//       labelStyle: { fontSize: 1, },
//       style: { backgroundColor: "lightblue", },
//       },      
//   },
// );



// export default createAppContainer(AdminTabNavigator);