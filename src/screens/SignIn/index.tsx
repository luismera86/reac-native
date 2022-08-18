import { Text, TextInput, View } from 'react-native'

import { LabelInputForm } from '../../components'
import React from 'react'
import { styles } from './styles'

type Props = {
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
}: Props) => {
	const onChangeUserName = (text: string) => setUserName(text)
	const onChangeUserFirsName = (text: string) => setUserFirstName(text)
	const onChangeUserLastName = (text: string) => setUserLastName(text)
	const onChangeUserMail = (text: string) => setUserMail(text)
	const onChangeUserPassword = (text: string) => setUserPassword(text)
	return (
		<View style={styles.container}>
			<Text>REGISTRO DE USUARIO</Text>
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
		</View>
	)
}

export default SignIn
