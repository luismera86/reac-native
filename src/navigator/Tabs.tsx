import { LogOutScreen, LoginScreen } from '../screens'

import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import SectionsNavigator from './SectionsNavigator'
import { View } from 'react-native'
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
              <FontAwesome name='navicon' size={26} color='#8D99AE' />
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name='SignInTab'
        component={LogOutScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome name='sign-out' size={26} color='#8D99AE' />
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
    </BottomTab.Navigator>
  )
}

export default Tabs
