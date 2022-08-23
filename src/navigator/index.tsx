import AlbumNavigator from './AlbumNavigator'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AlbumNavigator />
    </NavigationContainer>
  )
}

export default RootNavigator
