import { Login, Sections, SignIn } from '../screens'

import AlbumNavigator from './AlbumNavigator'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BottomTab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName='SectionsTab'
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen
        name='LoginTab'
        component={Login}
        options={{
          title: 'Login',
        }}
      />
      <BottomTab.Screen
        name='SignInTab'
        component={SignIn}
        options={{
          title: 'Registro',
        }}
      />
      <BottomTab.Screen
        name='SectionsTab'
        component={Sections}
        options={{
          title: 'Secciones',
        }}
      />
      <BottomTab.Screen
        name='AlbumNavigatorTab'
        component={AlbumNavigator}
        options={{
          title: 'Album',
        }}
      />
    </BottomTab.Navigator>
  )
}

export default Tabs
