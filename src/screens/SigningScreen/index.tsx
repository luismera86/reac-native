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
    setUserPassword,
    userFirstName,
    userLastName,
    userMail,
    userPassword,
  } = useSignIn()

  const dispatch = useAppDispatch()

  const onChangeUserFirsName = (text: string) => setUserFirstName(text)
  const onChangeUserLastName = (text: string) => setUserLastName(text)
  const onChangeUserMail = (text: string) => setUserMail(text)
  const onChangeUserPassword = (text: string) => setUserPassword(text)
  const onHandleSaveButton = () => {
    const newUser: User = {
      firstname: userFirstName,
      lastname: userLastName,
      email: userMail,
      password: userPassword,
    }

    void dispatch(addUsersDb(newUser))

    setUserFirstName('')
    setUserLastName('')
    setUserMail('')
    setUserPassword('')
  }
  const onHandleReturn = () => navigation.navigate('Login')
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>REGISTRA UN USUARIO NUEVO</Text>
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
        title='CONTRASE??A'
        value={userPassword}
        placeholder='Ingrese su contrase??a'
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
