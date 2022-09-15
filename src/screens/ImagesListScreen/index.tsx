import { FlatList, Text, View } from 'react-native'

import ImageModel from '../../models/imageModel'
import ImagesScreen from '../ImagesScreen'
import React from 'react'
import { RootStackParamList } from '../../navigator/SectionsNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from './styles'
import { useAppSelector } from '../../app/hooks'

interface Props extends StackScreenProps<RootStackParamList> {}
interface itemsProps {
  item: ImageModel
}
const ImagesListScreen = ({ navigation }: Props) => {
  const images = useAppSelector(state => state.images)
  const renderItem = ({ item }: itemsProps) => (
    <ImagesScreen
      {...item}
      onPress={() =>
        navigation.navigate('ImageDetails', {
          id: item.id,
          title: item.title,
          description: item.description,
          image: item.image,
        })
      }
    />
  )

  return (
    <View>
      <FlatList
        style={styles.container}
        data={images}
        keyExtractor={item => item.id?.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No hay imágenes</Text>}
      />
    </View>
  )
}

export default ImagesListScreen
