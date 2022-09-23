import { Button, Text, TextInput, View } from 'react-native'

import { ItemList } from '../../../interfaces/ItemList'
import List from '../List'
import colors from '../../../constants/colors'
import { styles } from './styles'
import { useState } from 'react'

const generarId = () => {
  const random = Math.random().toString(36).substr(2)
  const fecha = Date.now().toString(36)

  return random + fecha
}

const TodoList = () => {
  const [item, setItem] = useState('')
  const [itemList, setItemList] = useState<ItemList[]>([])

  const onChangeText = (text: string) => {
    setItem(text)
  }

  const addItem = () => {
    if (item.length > 0) {
      const newItem = {
        id: generarId(),
        item,
      }
      setItemList([...itemList, newItem])

      setItem('')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO List</Text>
      <TextInput
        style={styles.formInput}
        placeholder='Escribe la tarea a realizar'
        value={item}
        onChangeText={onChangeText}
      />
      <View>
        <Button title='AGREGAR' color={colors.tertiary} onPress={addItem} touchSoundDisabled={item === ''} />
      </View>
      <List itemList={itemList} setItemList={setItemList} />
    </View>
  )
}

export default TodoList
