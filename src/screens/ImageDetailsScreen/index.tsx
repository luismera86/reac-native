import { Image, Text, View } from 'react-native'

import React from 'react'
import { RootStackParamList } from '../../navigator/SectionsNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from './styles'

interface Props extends StackScreenProps<RootStackParamList> {}

const ImageDetailsScreen = ({ navigation, route }: Props) => {
  const { title, image, description } = route.params

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

export default ImageDetailsScreen
