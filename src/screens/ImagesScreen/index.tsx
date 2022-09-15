import { Image, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { styles } from './styles'

interface Props {
  title: string
  description: string
  image: string
  onPress?: () => any
}
const ImagesScreen = ({ title, description, image, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ImagesScreen
