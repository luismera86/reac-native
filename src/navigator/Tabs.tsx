import { Login, SignIn } from '../screens'
import { Text, View } from 'react-native'

import AlbumNavigator from './AlbumNavigator'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import SectionsNavigator from './SectionsNavigator'
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
        name='SectionsTab'
        component={SectionsNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome name='navicon' size={24} color='black' />
              <Text>Sections</Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name='SignInTab'
        component={SignIn}
        options={{
          title: 'Registro',
        }}
      />
    </BottomTab.Navigator>
  )
}

export default Tabs
