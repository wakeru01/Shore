import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Entypo } from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";

const HomeNavigator = createStackNavigator(
    {
      Home: {
        screen: HomeScreen,
      },
    },
    {
      defaultNavigationOptions: {
        headerStyle: { backgroundColor: "#4a148c", },
        headerTintColor: "white",
      },
    }
  );


const NotificationNavigator = createStackNavigator(
    {
      Notifications: {
        screen: NotificationScreen,
      },
    },
    {
      defaultNavigationOptions: {
        headerStyle: { backgroundColor: "#4a148c", },
        headerTintColor: "white",
      },
    }
);


const ShoreTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions:{
        tabBarIcon: (tabInfo) => {
          return (<Entypo name="home" size={26} color="black" />);
        },
      },
    },
    Notofication: {
      screen: NotificationNavigator,
      navigationOptions:{
        tabBarIcon: (tabInfo) => {
          return (<Entypo name="bell" size={26} color="black" />);
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "darkblue",
      labelStyle: { fontSize: 1, },
      style: { backgroundColor: "lightblue", },
      },      
  },
);



export default createAppContainer(ShoreTabNavigator);