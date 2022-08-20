import { Text, View } from 'react-native'

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { RootStackParamList } from '../../../../navigator/RootStackPrams';
import { SectionButton } from '../../../../components';
import {useNavigation} from '@react-navigation/native';

type ScreenProp = NativeStackNavigationProp<RootStackParamList, 'Album1'>;

const Album1 = () => {

    const navigator = useNavigation<ScreenProp>()
    const onHandleNavigate = () => {

      navigator.navigate('ALBUM DE FOTOS')
    }
  return (
    <View>
      <Text>Album3</Text>
      <SectionButton title='VOLVER' onPress={onHandleNavigate} /> 

    </View>
  )
}

export default Album1