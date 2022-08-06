import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

const List = ({itemList}) => {



    
  return (
    <View>
       {itemList.map(item => (
        <View key={item}>
            <Text>{item}</Text>
        </View>
       ))}
    </View> 
  )
}

export default List