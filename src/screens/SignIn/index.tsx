import { Text, TouchableOpacity, View } from 'react-native'

import { LabelInputForm } from '../../components'
import React from 'react'
import { styles } from './styles'

interface User {
  id: string
  username: string
  firstname: string
  lastname: string
  email: string
  password: string
}

interface Props {
  userName: string
  setUserName: (text: string) => void
  userFirstName: string
  setUserFirstName: (text: string) => void
  userLastName: string
  setUserLastName: (text: string) => void
  userMail: string
  setUserMail: (text: string) => void
  userPassword: string
  setUserPassword: (text: string) => void
  setUsers: ([]: object[]) => void
  users: object[]
  setUserSignIn: (state: boolean) => void
  userSignIn: boolean
}

const SignIn = ({
  userName,
  setUserName,
  userFirstName,
  setUserFirstName,
  userLastName,
  setUserLastName,
  userMail,
  setUserMail,
  userPassword,
  setUserPassword,
  setUsers,
  users,
  setUserSignIn,
  userSignIn,
}: Props) => {
  const onChangeUserName = (text: string) => setUserName(text)
  const onChangeUserFirsName = (text: string) => setUserFirstName(text)
  const onChangeUserLastName = (text: string) => setUserLastName(text)
  const onChangeUserMail = (text: string) => setUserMail(text)
  const onChangeUserPassword = (text: string) => setUserPassword(text)
  const onHandleSaveButton = () => {
    const newUser: User = {
      id: 'fd',
      username: userName,
      firstname: userFirstName,
      lastname: userLastName,
      email: userMail,
      password: userPassword,
    }

    setUsers([...users, newUser])
    setUserSignIn(!userSignIn)
    setUserName('')
    setUserFirstName('')
    setUserLastName('')
    setUserMail('')
    setUserPassword('')

    console.log(users)
  }
  const onHandleReturn = () => setUserSignIn(!userSignIn)
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

export default SignIn
