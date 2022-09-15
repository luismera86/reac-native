/* eslint-disable no-useless-return */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import { Alert, Image, Text, View } from 'react-native'
import React, { useState } from 'react'

import SectionButton from '../SectionButton/index'
import { styles } from './styles'

const ImageSelector = () => {
  const [pickedUrl, setPickedUrl] = useState(null)
  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('Permisos insuficientes', 'Necesitas dar permisos de cámara para usar esta app', [{ text: 'Ok' }])
      return false
    }
    return true
  }
  const onHandleTakeImage = async () => {
    const isCameraPermission = await verifyPermissions()
    if (!isCameraPermission) return

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    })
    setPickedUrl(image.uri)
  }
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? <Text>No hay ninguna imagen</Text> : <Image style={styles.image} source={{ uri: pickedUrl }} />}
      </View>
      <SectionButton title='TOMAR FOTO' onPress={onHandleTakeImage} />
    </View>
  )
}

export default ImageSelector
