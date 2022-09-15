import { Text, View } from 'react-native'

import React from 'react'
import { useAppSelector } from '../../app/hooks'

const ImagesScreen = () => {
  const images = useAppSelector(state => state.images)
  console.log(images)

  return (
    <View>
      <Text>ImagesScreen</Text>
    </View>
  )
}

export default ImagesScreen
