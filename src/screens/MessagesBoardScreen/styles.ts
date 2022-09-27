import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxMessageContainer: {
    flexDirection: 'row',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  messagesContainer: {
    width: '90%',
    backgroundColor: '#fff',
    marginBottom: 10,
    marginLeft: 10,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  messageAuthor: {
    fontSize: 16,
    fontWeight: '600',
  },
})
