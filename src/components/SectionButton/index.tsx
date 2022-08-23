import { Text, TouchableOpacity } from 'react-native'

import React from 'react'
import { styles } from './styles'

interface Props {
  title: string
  onPress: () => void
}

const SectionButton = ({ onPress, title }: Props) => {
  const buttonFunction = () => {
    onPress()
  }

  return (
    <TouchableOpacity style={styles.Button} onPress={buttonFunction}>
      <Text style={styles.ButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default SectionButton
