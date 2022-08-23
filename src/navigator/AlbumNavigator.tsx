import { Album1, Album2, Album3 } from '../screens/PhotoAlbum/albums'

import PhotoAlbum from '../screens/PhotoAlbum'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
const AlbumNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='ALBUM DE FOTOS' component={PhotoAlbum} />
      <Stack.Screen name='Album1' component={Album1} />
      <Stack.Screen name='Album2' component={Album2} />
      <Stack.Screen name='Album3' component={Album3} />
    </Stack.Navigator>
  )
}

export default AlbumNavigator
