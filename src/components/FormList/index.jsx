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
    setItemList([
        ...itemList,
        item
    ])

    console.log(itemList)
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
            <Button title='AGREGAR' color={colors.secondary} onPress={addItem}  />
           <List itemList={itemList} />
		</View>
  )
}


export default FormList