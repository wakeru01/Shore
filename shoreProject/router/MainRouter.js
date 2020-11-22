import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeNavigator as Home } from '../navigation/NavigatorAdmin'
import { AddSheetNavigator as AddSheet } from '../navigation/NavigatorAdmin'
import { NotificationNavigator as Notification } from '../navigation/NavigatorAdmin'
import { ProfileNavigator as Profile } from '../navigation/NavigatorAdmin'
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
        tabBarIcon: () => (<Entypo name="bell" size={26} color="black" />)
      }} name="Notification" component={Notification} />
      <Tab.Screen options={{
        tabBarIcon: () => (<Entypo name="user" size={26} color="black" />)
      }} name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
