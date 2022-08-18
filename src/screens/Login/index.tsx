import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import { LabelInputForm } from '../../components'
import React from 'react'
import { style } from './styles'
import useLogin from '../../hooks/useLogIn'

interface Props {
	setUserPass: (text: string) => void
	setUserName: (text: string) => void
	setUserAccess: (status: boolean) => void
	setUserSignIn: (status: boolean) => void
	userName: string
	userPass: string
}

const Login = ({ setUserPass, setUserName, setUserAccess, userName, userPass, setUserSignIn }: Props) => {
	const onHandledUserName = (text: string) => setUserName(text)

	const onHandledUserPass = (text: string) => setUserPass(text)

	const onHandledUserAccess = () => setUserAccess(true)

	const onHandleUserRegister = () => setUserSignIn(true)

	return (
		<View style={style.container}>
			<LabelInputForm
				title='USUARIO'
				value={userName}
				onChangeText={onHandledUserName}
				placeholder='Ingrese apellido'
				secureTextEntry={false}
			/>

			<LabelInputForm
				title='CONTRASEÑA'
				value={userPass}
				onChangeText={onHandledUserPass}
				placeholder='Ingrese apellido'
				secureTextEntry={true}
			/>

			<TouchableOpacity style={style.enterButton} onPress={onHandledUserAccess}>
				<Text style={style.textButton}>ENTRAR</Text>
			</TouchableOpacity>
			<TouchableOpacity style={style.enterButton} onPress={onHandleUserRegister}>
				<Text style={style.textButton}>REGISTRARSE</Text>
			</TouchableOpacity>
		</View>
	)
}

export default Login
