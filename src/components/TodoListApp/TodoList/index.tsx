import { Button, Text, TextInput, View } from 'react-native'
import { addTodoListDb, getTodoListDb } from '../../../features/todoListSlice/todoListSlice'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { useEffect, useState } from 'react'

import { ItemList } from '../../../interfaces/ItemList'
import List from '../List'
import colors from '../../../constants/colors'
import { styles } from './styles'

const TodoList = () => {
  const itemListStage: ItemList[] = useAppSelector(state => state.todoList)
  const dispatch = useAppDispatch()
  const [item, setItem] = useState('')

  useEffect(() => {
    void dispatch(getTodoListDb())
  }, [])

  const onChangeText = (text: string) => {
    setItem(text)
  }

  const addItem = () => {
    if (item.length > 0) {
      const newItem = {
        item,
      }
      void dispatch(addTodoListDb(newItem))

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
