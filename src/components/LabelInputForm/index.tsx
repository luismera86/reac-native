import { Text, TextInput, View } from 'react-native'

import React from 'react'
import { styles } from './styles'

type Props = {
	title: string
	value: string
	onChangeText: (text: string) => void
	placeholder?: string
	secureTextEntry?: boolean
}

const LabelInputForm = ({ title, value, onChangeText, placeholder, secureTextEntry }: Props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.textLabel}>{title}</Text>
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				secureTextEntry={secureTextEntry}
			/>
		</View>
	)
}

export default LabelInputForm
