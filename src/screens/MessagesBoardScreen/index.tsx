import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { LabelInputForm, SectionButton } from '../../components'
import { addMessage, deleteMessage, getMessages } from '../../features/messagesBoardSlice/messagesBoardSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useEffect, useState } from 'react'

import { FontAwesome } from '@expo/vector-icons'
import { Messages } from '../../interfaces/Messages'
import colors from '../../constants/colors'
import { styles } from './styles'

interface MessageProps {
  item: Messages
}

const MessagesBoardScreen = () => {
  useEffect(() => {
    void dispatch(getMessages())
  }, [])

  const user = useAppSelector(state => state.userActive)
  const dispatch = useAppDispatch()
  const messages = useAppSelector(state => state.messagesBoard)
  const [message, setMessage] = useState('')

  const onChangetext = (text: string) => {
    setMessage(text)
  }

  const onSendMessage = () => {
    void dispatch(addMessage(message, user.firstname, user.lastname))
    setMessage('')
  }
  const onHandleDelete = (id: string) => {
    void dispatch(deleteMessage(id))
  }
  const renderItem = ({ item }: MessageProps) => (
    <View style={styles.boxMessageContainer}>
      {item.userLastName === user.lastname && (
        <TouchableOpacity onPress={() => onHandleDelete(item.id)}>
          <FontAwesome name='times-circle' size={30} color={colors.tertiary} />
        </TouchableOpacity>
      )}

      <View style={styles.messagesContainer}>
        <Text style={styles.messageAuthor}>
          Usuario: {item.userFirstName} {item.userLastName}
        </Text>
        <Text style={styles.messageText}>Mensaje: {item.message}</Text>
      </View>
    </View>
  )

  return (
    <View>
      <View style={styles.inputContainer}>
        <LabelInputForm title='Mensaje' value={message} onChangeText={onChangetext} />
        <SectionButton title='Enviar' onPress={onSendMessage} />
      </View>

      <FlatList data={messages} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  )
}

export default MessagesBoardScreen
