/* eslint-disable @typescript-eslint/no-floating-promises */

import { ImageSelector, SectionButton } from '../../components'
import { ScrollView, Text, TextInput, View } from 'react-native'

import React from 'react'
import { RootStackParamList } from '../../navigator/SectionsNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import { saveImage } from '../../features/imagesSlice/imagesSlice'
import { style } from './styles'
import { useAppDispatch } from '../../app/hooks'

interface Props extends StackScreenProps<RootStackParamList> {}

const NewImage = ({ navigation }: Props) => {
  const dispatch = useAppDispatch()

  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [image, setImage] = React.useState('')
  const handleOnChangeTitle = (text: string) => {
    setTitle(text)
  }
  const handleOnChangeDescription = (text: string) => {
    setDescription(text)
  }
  const onHandleSubmit = () => {
    dispatch(saveImage(title, description, image))
    navigation.navigate('Images')
  }

  const onHandleTakeImage = (url: string) => {
    setImage(url)
  }

  return (
    <ScrollView style={style.container}>
      <View style={style.content}>
        <Text style={style.title}>Título de la imagen</Text>
        <TextInput style={style.input} onChangeText={handleOnChangeTitle} value={title} />
        <Text style={style.title}>Descripción de la imagen</Text>
        <TextInput style={style.input} onChangeText={handleOnChangeDescription} value={description} />
        <ImageSelector onImage={onHandleTakeImage} />
        <SectionButton title='GUARDAR' onPress={onHandleSubmit} />
      </View>
    </ScrollView>
  )
}

export default NewImage
