import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles'

const List = ({itemList}) => {

    
  return (
    <View>
       {itemList.map(item => (
        <View key={item}>
            <Text style={styles.item}>{item}</Text>
        </View>
       ))}
    </View> 
  )
}

export default List