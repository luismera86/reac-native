import { FlatList, Text, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

import ImageModel from '../../models/imageModel'
import ImagesScreen from '../ImagesScreen'
import { RootStackParamList } from '../../navigator/SectionsNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import { loadImages } from '../../features/imagesSlice/imagesSlice'
import { styles } from './styles'
import { useEffect } from 'react'

interface Props extends StackScreenProps<RootStackParamList> {}
interface itemsProps {
  item: ImageModel
}
const ImagesListScreen = ({ navigation }: Props) => {
  const dispatch = useAppDispatch()
  const images = useAppSelector(state => state.images)
  useEffect(() => {
    void dispatch(loadImages())
  }, [])

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
    // No logro resolver el tipado en este componente
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
