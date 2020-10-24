import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Entypo } from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import AddSheetScreen from "../screens/AddSheetScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";

const HomeNavigator = createStackNavigator(
    {
      Homes: {
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

const AddSheetNavigator = createStackNavigator(
  {
    AddSheets: {
      screen: AddSheetScreen,
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

const ProfileNavigator = createStackNavigator(
    {
      Profiles: {
        screen: ProfileScreen,
      },
    },
    {
      defaultNavigationOptions: {
        headerStyle: { backgroundColor: "#4a148c", },
        headerTintColor: "white",
      },
    }
);

const UserTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions:{
        tabBarIcon: (tabInfo) => {
          return (<Entypo name="home" size={26} color="black" />);
        },
      },
    },
    Addheet: {
      screen: AddSheetNavigator,
      navigationOptions:{
        tabBarIcon: (tabInfo) => {
          return (<Entypo name="circle-with-plus" size={26} color="black" />);
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
    Profile: {
      screen: ProfileNavigator,
      navigationOptions:{
        tabBarIcon: (tabInfo) => {
          return (<Entypo name="user" size={26} color="black" />);
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



export default createAppContainer(UserTabNavigator);