import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { style } from './styles'

const Login = () => {
  return (
    <View style={style.container}>
      <Text style={style.textLabel}>NOMBRE DE USUARIO</Text>
      <TextInput style={style.input} placeholder='Nombre de usuario' />
      <Text style={style.textLabel}>INGRESE SU CONTRASEÑA</Text>
      <TextInput style={style.input} placeholder='Contraseña' secureTextEntry={true} />
      <TouchableOpacity style={style.enterButton}>
        <Text style={style.textButton}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login