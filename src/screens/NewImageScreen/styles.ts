import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.secondary,
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: colors.secondary,
  },
})
