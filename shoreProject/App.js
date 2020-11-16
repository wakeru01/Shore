import React from 'react';
import Root from './router/RootRouter'
import { NavigationContainer } from '@react-navigation/native'
import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA4ximMS8yPj7zp_EGg2GH-VUHxuWVBEDM",
  authDomain: "shore-1d16d.firebaseapp.com",
  databaseURL: "https://shore-1d16d.firebaseio.com",
  projectId: "shore-1d16d",
  storageBucket: "shore-1d16d.appspot.com",
  messagingSenderId: "498778944451",
  appId: "1:498778944451:web:0576c365cf74c47d1c8376"
}

firebase.initializeApp(firebaseConfig)


export default function App() {
  return (
    <NavigationContainer><Root /></NavigationContainer>
  );
}
