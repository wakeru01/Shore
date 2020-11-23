import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AddPicScreen from '../screens/main/AddPicScreen'
import AddSheetScreen from '../screens/main/AddSheetScreen'
import MainScreen from './MainRouter'
const Stack = createStackNavigator()

export default function PicRouter() {
    return (
        <Stack.Navigator initialRouteName="AddSheet" headerShown={false}>
          <Stack.Screen name="AddPic" component={AddPicScreen} />
          <Stack.Screen name="AddSheet" component={AddSheetScreen} />
        </Stack.Navigator>
      )
}
