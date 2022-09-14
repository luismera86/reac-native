import ImagesNavigator from './ImagesNavigator'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Tabs from './Tabs'

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

export default RootNavigator
