import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export const styles = StyleSheet.create({
  Button: {
    margin: 20,
    width: 300,
    backgroundColor: colors.secondary,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 10
  },
  ButtonText: {
    fontSize: 18,
    fontFamily: 'Dyna-Regular',
    color: colors.background,
    elevation: 5
  }
})
