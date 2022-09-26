/* eslint-disable array-callback-return */

import { LabelInputForm, SectionButton } from '../../components'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

import { RootStackParamList } from '../../navigator/UserNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import { View } from 'react-native'
import { getUsers } from '../../features/usersSlice/usersSlice'
import { setUserAccess } from '../../features/userAccessSlice/userAccessSlice'
import { style } from './styles'

interface Props extends StackScreenProps<RootStackParamList> {}

const LoginScreen = ({ navigation }: Props) => {
  const users = useAppSelector(state => state.users)
  const dispatch = useAppDispatch()
  void dispatch(getUsers())
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onHandledUserMail = (text: string) => setEmail(text)

  const onHandledUserPass = (text: string) => setPassword(text)

  const onHandledUserAccess = () => {
    userCheck(email, password)
  }

  const userCheck = (email: string, password: string) => {
    users.map(user => {
      if (user.email === email && user.password === password) {
        void dispatch(setUserAccess(true))
      }
    })
  }

  const onHandleUserRegister = () => navigation.navigate('Signing')

  return (
    <View style={style.container}>
      <LabelInputForm
        title='E-mail'
        value={email}
        onChangeText={onHandledUserMail}
        placeholder='Ingrese apellido'
        secureTextEntry={false}
      />

      <LabelInputForm
        title='Contraseña'
        value={password}
        onChangeText={onHandledUserPass}
        placeholder='Ingrese apellido'
        secureTextEntry={true}
      />

      <SectionButton title='ENTRAR' onPress={onHandledUserAccess} />
      <SectionButton title='REGISTRARSE' onPress={onHandleUserRegister} />
    </View>
  )
}

export default LoginScreen
