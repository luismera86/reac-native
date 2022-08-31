import { ButtonNavigator, Card, Header, SectionButton } from '../../components'

import React from 'react'
import { RootStackParamList } from '../../navigator/AlbumNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import { View } from 'react-native'
import { styles } from './styles'

interface Props extends StackScreenProps<RootStackParamList> {
  userName: string
  setPhotoAlbumAccess: (status: boolean) => void
  photoAlbumAccess: boolean
}

const PhotoAlbum = ({ userName, setPhotoAlbumAccess, photoAlbumAccess, navigation }: Props) => {
  const onHandledUserAccess = () => {
    setPhotoAlbumAccess(!photoAlbumAccess)
  }
  const onHandleNavigateAlbum1 = () => {
    navigation.navigate('Album1')
  }
  const onHandleNavigateAlbum2 = () => {
    navigation.navigate('Album2')
  }
  const onHandleNavigateAlbum3 = () => {
    navigation.navigate('Album3')
  }
  return (
    <View style={styles.container}>
      <Header userName={userName} />

      <Card width={340}>
        <SectionButton title='ALBUM 1' onPress={onHandleNavigateAlbum1} />
        <SectionButton title='ALBUM 2' onPress={onHandleNavigateAlbum2} />
        <SectionButton title='ALBUM 3' onPress={onHandleNavigateAlbum3} />
      </Card>
      <ButtonNavigator onPress={onHandledUserAccess} title='VOLVER' />
    </View>
  )
}

export default PhotoAlbum
