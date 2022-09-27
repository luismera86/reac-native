import { Text, View } from 'react-native'

import React from 'react'
import { styles } from './styles'

interface Props {
  userName: string
}

const Header = ({ userName }: Props) => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.titleHeader}>Bienvenido/a {userName}</Text>
    </View>
  )
}

export default Header
