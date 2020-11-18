import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeNavigator as Home } from '../navigation/NavigatorAdmin'
import { AddSheetNavigator as AddSheet } from '../navigation/NavigatorAdmin'
import { NotificationNavigator as Notification } from '../navigation/NavigatorAdmin'
import { ProfileNavigator as Profile } from '../navigation/NavigatorAdmin'
import Login from '../screens/LoginScreen'
import Register from '../screens/RegisterScreen'
// import Notification from '../screens/main/NotificationScreen'
// import Profile from '../screens/main/ProfileScreen'
// import AddSheet from '../screens/main/AddSheetScreen'
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{
        tabBarIcon: () => (<Entypo name="home" size={26} color="black" />)
      }} name="Home" component={Home} />
      <Tab.Screen options={{
        tabBarIcon: () => (<Entypo name="circle-with-plus" size={26} color="black" />)
      }} name="AddSheet" component={AddSheet} />



      <Tab.Screen options={{
        tabBarIcon: () => (<Entypo name="Login" size={26} color="black" />)
      }} name="Login" component={Login} />
      <Tab.Screen options={{
        tabBarIcon: () => (<Entypo name="Register" size={26} color="black" />)
      }} name="Register" component={Register} />



      <Tab.Screen options={{
        tabBarIcon: () => (<Entypo name="bell" size={26} color="black" />)
      }} name="Notification" component={Notification} />
      <Tab.Screen options={{
        tabBarIcon: () => (<Entypo name="user" size={26} color="black" />)
      }} name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
