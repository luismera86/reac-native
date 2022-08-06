import { Button, FlatList, Modal, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import colors from '../../constants/colors'
import { styles } from './styles'

const List = ({ itemList, setItemList }) => {
	const [modalVisibility, setModalVisibility] = useState(false)
	const [itemSelected, setItemSelected] = useState({})

	const onHandledModal = (id) => {
    const itemFilter = itemList.filter((item) => item.id === id)[0]
		setItemSelected(itemFilter)
		setModalVisibility(!modalVisibility)
	}

	const onHandledDelete = (id) => {
    
		setItemList(itemList.filter((item) => item.id !== id))
		setItemSelected({})
		setModalVisibility(!modalVisibility)
	}

	const renderItem = ({ item }) => (
		<View style={styles.itemContainer}>
			<Text style={styles.item}>{item.item}</Text>
			<TouchableOpacity onPress={() => onHandledModal(item.id)}>
				<Text style={styles.deleteButton}>X</Text>
			</TouchableOpacity>
		</View>
	)

	return (
		<View style={styles.container}>
			<FlatList data={itemList} renderItem={renderItem} keyExtractor={(item) => item.id} />
			<Modal animationType='slide' visible={modalVisibility}>
        <View style={styles.modalContainer}>
          <Text style={styles.waring}>!</Text>
          <Text style={styles.quest}>¿Estas seguro que deseas eliminar la tarea?</Text>
          <Text style={styles.quest}>{itemSelected.item}</Text>
          <View style={styles.modalButtons}>
            <Button title='ACEPTAR' color={colors.background} onPress={() => onHandledDelete(itemSelected.id) }/>
            <Button title='CANCELAR' color={colors.background} onPress={() => setModalVisibility(!modalVisibility)}/>

          </View>
        </View>
      </Modal>
		</View>
	)
}

export default List
