import { Text, View } from 'react-native'

import React from 'react'

const List = ({itemList}) => {
  return (
    <View>
      <Text>{itemList}</Text>
    </View>
  )
}

export default List