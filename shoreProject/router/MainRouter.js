import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigator as Home } from '../navigation/NavigatorAdmin'
import Detail from '../screens/main/DetailScreen'
import Notification from '../screens/main/NotificationScreen'
import Profile from '../screens/main/ProfileScreen'
import AddSheet from '../screens/main/AddSheetScreen'
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{
        tabBarIcon: () => (<Entypo name="home" size={26} color="black" />)
      }} name="Home" component={Home} />
      <Tab.Screen name="Detail" component={Detail} />
      <Tab.Screen name="AddSheet" component={AddSheet} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
