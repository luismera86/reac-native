import LoginScreen from '../screens/LoginScreen'
import React from 'react'
import SigningScreen from '../screens/SigningScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Login: undefined
  Signing: undefined
}

const Stack = createNativeStackNavigator()

const UserNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Signing'
        component={SigningScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default UserNavigator
