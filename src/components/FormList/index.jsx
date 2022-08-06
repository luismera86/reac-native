import { Button, Text, TextInput, View } from 'react-native'

import List from '../List'
import colors from '../../constants/colors'
import { styles } from './styles'
import { useState } from 'react'

const generarId = () => {
	const random = Math.random().toString(36).substr(2)
	const fecha = Date.now().toString(36)

	return random + fecha
}

const FormList = () => {
	const [item, setItem] = useState('')
	const [itemList, setItemList] = useState([])

	const onChangeText = (text) => {
		setItem(text)
	}

	const addItem = () => {
		if (item.length > 0) {
			setItemList([
				...itemList,
				{
					id: generarId(),
					item,
				},
			])

			setItem('')
		}
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
				<Button title='AGREGAR' color={colors.background} onPress={addItem} touchSoundDisabled={item === ''} />
			</View>
			<List itemList={itemList} setItemList={setItemList} />
		</View>
	)
}

export default FormList
