import { Button, Text, TextInput, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'

import { ItemList } from '../../../interfaces/ItemList'
import List from '../List'
import { addTodoListDb } from '../../../features/todoListSlice/todoListSlice'
import colors from '../../../constants/colors'
import { styles } from './styles'
import { useState } from 'react'

const TodoList = () => {
  const itemListStage: ItemList[] = useAppSelector(state => state.todoList)
  const dispatch = useAppDispatch()
  const [item, setItem] = useState('')
  // const [itemList, setItemList] = useState<ItemList[]>([])

  const onChangeText = (text: string) => {
    setItem(text)
  }

  const addItem = () => {
    if (item.length > 0) {
      const newItem = {
        item,
      }
      // setItemList([...itemList, newItem])
      void dispatch(addTodoListDb(newItem))
      console.log(itemListStage)

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
      <List itemList={itemListStage} />
    </View>
  )
}

export default TodoList
