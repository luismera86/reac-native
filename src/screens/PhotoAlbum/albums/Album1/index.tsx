import { Text, View } from 'react-native'

import React from 'react'
import { RootStackParamList } from '../../../../navigator/AlbumNavigator'
import { SectionButton } from '../../../../components'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<RootStackParamList> {}
const Album1 = ({ navigation }: Props) => {
  const onHandleNavigate = () => {
    navigation.navigate('ALBUM_DE_FOTOS')
  }
  return (
    <View>
      <Text>Album1</Text>

      <SectionButton title='VOLVER' onPress={onHandleNavigate} />
    </View>
  )
}

export default Album1
