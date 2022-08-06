import { Button, Text, TextInput, View } from 'react-native'

import List from '../List'
import colors from '../../constants/colors'
import { styles } from './styles'
import { useState } from 'react'

const FormList = () => {
	const [item, setItem] = useState('')
	const [itemList, setItemList] = useState([])

	const onChangeText = (text) => {
		setItem(text)
	}

	const addItem = () => {
		setItemList([...itemList, item])

		setItem('')
	}

	return (
		<View>
			<Text style={styles.title}>LISTA DE TAREAS</Text>
			<TextInput
				style={styles.formInput}
				placeholder='Escribe la tarea a realizar'
				value={item}
				onChangeText={onChangeText}
			/>
			<View>
				<Button title='AGREGAR' color={colors.background} onPress={addItem} />
			</View>
			<List itemList={itemList} />
		</View>
	)
}

export default FormList
