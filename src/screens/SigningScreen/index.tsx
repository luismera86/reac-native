import { Text, TouchableOpacity, View } from 'react-native'

import { LabelInputForm } from '../../components'
import React from 'react'
import { RootStackParamList } from '../../navigator/UserNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import { User } from '../../interfaces/User'
import { addUsersDb } from '../../features/usersSlice/usersSlice'
import { styles } from './styles'
import { useAppDispatch } from '../../app/hooks'
import useSignIn from '../../hooks/useSignIn'

interface Props extends StackScreenProps<RootStackParamList> {}

const SigningScreen = ({ navigation }: Props) => {
  const {
    setUserFirstName,
    setUserLastName,
    setUserMail,
    setUserName,
    setUserPassword,
    setUserSignIn,
    userFirstName,
    userLastName,
    userMail,
    userName,
    userPassword,
    userSignIn,
  } = useSignIn()

  const dispatch = useAppDispatch()

  const onChangeUserName = (text: string) => setUserName(text)
  const onChangeUserFirsName = (text: string) => setUserFirstName(text)
  const onChangeUserLastName = (text: string) => setUserLastName(text)
  const onChangeUserMail = (text: string) => setUserMail(text)
  const onChangeUserPassword = (text: string) => setUserPassword(text)
  const onHandleSaveButton = () => {
    const newUser: User = {
      username: userName,
      firstname: userFirstName,
      lastname: userLastName,
      email: userMail,
      password: userPassword,
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(addUsersDb(newUser))

    setUserSignIn(!userSignIn)
    setUserName('')
    setUserFirstName('')
    setUserLastName('')
    setUserMail('')
    setUserPassword('')
  }
  const onHandleReturn = () => navigation.navigate('Login')
  return (
    <View style={styles.container}>
      <Text>REGISTRA UN USUARIO NUEVO</Text>
      <LabelInputForm
        title='USUARIO'
        value={userName}
        placeholder='Ingrese su nombre de usuario'
        onChangeText={onChangeUserName}
      />
      <LabelInputForm
        title='NOMBRE'
        value={userFirstName}
        placeholder='Ingrese su nombre'
        onChangeText={onChangeUserFirsName}
      />
      <LabelInputForm
        title='APELLIDO'
        value={userLastName}
        placeholder='Ingrese su apellido'
        onChangeText={onChangeUserLastName}
      />
      <LabelInputForm title='E-MAIL' value={userMail} placeholder='Ingrese su mail' onChangeText={onChangeUserMail} />
      <LabelInputForm
        title='CONTRASEÑA'
        value={userPassword}
        placeholder='Ingrese su contraseña'
        onChangeText={onChangeUserPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.enterButton} onPress={onHandleSaveButton}>
        <Text style={styles.textButton}>REGISTRARSE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.enterButton} onPress={onHandleReturn}>
        <Text style={styles.textButton}>VOLVER</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SigningScreen
