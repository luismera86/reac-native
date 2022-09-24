import { Button, FlatList, Modal, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { FontAwesome } from '@expo/vector-icons'
import { ItemList } from '../../../interfaces/ItemList'
import colors from '../../../constants/colors'
import { deleteTodoListDb } from '../../../features/todoListSlice/todoListSlice'
import { styles } from './styles'
import { useAppDispatch } from '../../../app/hooks'

interface Props {
  itemList: ItemList[]
}
interface Item {
  item: {
    id: string
    item: string
  }
}

const List = ({ itemList }: Props) => {
  const dispatch = useAppDispatch()

  const [modalVisibility, setModalVisibility] = useState(false)
  const [itemSelected, setItemSelected] = useState<ItemList>({
    id: '',
    item: '',
  })

  const onHandledModal = (id: string) => {
    const itemFilter = itemList.filter(item => item.id === id)[0]

    setItemSelected(itemFilter)
    setModalVisibility(!modalVisibility)
  }

  const onHandledDelete = (id: string) => {
    void dispatch(deleteTodoListDb(id))

    setItemSelected({ id: '', item: '' })
    setModalVisibility(!modalVisibility)
  }

  const renderItem = ({ item }: Item) => (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.item}</Text>
      <TouchableOpacity onPress={() => onHandledModal(item.id)}>
        <FontAwesome name='remove' size={24} color='red' />
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList data={itemList} renderItem={renderItem} keyExtractor={item => item.id} />
      <Modal animationType='slide' visible={modalVisibility}>
        <View style={styles.modalContainer}>
          <Text style={styles.waring}>!</Text>
          <Text style={styles.quest}>¿Estas seguro que deseas eliminar la tarea?</Text>
          <Text style={styles.quest}>{itemSelected.item}</Text>
          <View style={styles.modalButtons}>
            <Button title='ACEPTAR' color={colors.primary} onPress={() => onHandledDelete(itemSelected.id)} />
            <Button title='CANCELAR' color={colors.primary} onPress={() => setModalVisibility(!modalVisibility)} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default List
