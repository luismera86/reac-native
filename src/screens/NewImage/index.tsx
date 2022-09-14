import { ScrollView, Text, TextInput, View } from 'react-native'

import React from 'react'
import { RootStackParamList } from '../../navigator/SectionsNavigator'
import { SectionButton } from '../../components'
import { StackScreenProps } from '@react-navigation/stack'
import { style } from './styles'

interface Props extends StackScreenProps<RootStackParamList> {}

const NewImage = ({ navigation }: Props) => {
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const handleOnChangeTitle = (text: string) => {
    setTitle(text)
  }
  const handleOnChangeDescription = (text: string) => {
    setDescription(text)
  }
  const onHandleSubmit = () => {
    navigation.navigate('Images')
  }

  return (
    <ScrollView style={style.container}>
      <View style={style.content}>
        <Text style={style.title}>Título de la imagen</Text>
        <TextInput style={style.input} onChangeText={handleOnChangeTitle} />
        <Text style={style.title}>Descripción de la imagen</Text>
        <TextInput style={style.input} onChangeText={handleOnChangeDescription} />
        <SectionButton title='GUARDAR' onPress={onHandleSubmit} />
      </View>
    </ScrollView>
  )
}

export default NewImage
