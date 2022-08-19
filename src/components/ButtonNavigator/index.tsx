import { Text, TouchableOpacity } from 'react-native'

import React from 'react'
import { styles } from './styles'

type Props = {
	title: string
	onPress: () => void
}

const ButtonNavigator = ({ onPress, title }: Props) => {
	const buttonFunction = () => {
		onPress()
	}

	return (
		<TouchableOpacity style={styles.Button} onPress={buttonFunction}>
			<Text style={styles.ButtonText}>{title}</Text>
		</TouchableOpacity>
	)
}

export default ButtonNavigator
