<<<<<<< Updated upstream
import React from "react";
import { StyleSheet } from "react-native";
import NavigatorUser from "./navigation/NavigatorUser";

export default function App() {
  // เพิ่มโค้ดส่วนนี้
  return(
    <NavigatorUser/>
  )
=======
import React from 'react';
import Root from './router/RootRouter'
import firebase from 'firebase/app'
import { NavigationContainer } from '@react-navigation/native'

const firebaseConfig = {
  apiKey: "AIzaSyA4ximMS8yPj7zp_EGg2GH-VUHxuWVBEDM",
  authDomain: "shore-1d16d.firebaseapp.com",
  databaseURL: "https://shore-1d16d.firebaseio.com",
  projectId: "shore-1d16d",
  storageBucket: "shore-1d16d.appspot.com",
  messagingSenderId: "498778944451",
  appId: "1:498778944451:web:0576c365cf74c47d1c8376"
>>>>>>> Stashed changes
}

firebase.initializeApp(firebaseConfig)

export default function App() {
  return (
    <NavigationContainer><Root /></NavigationContainer>
  );
}
