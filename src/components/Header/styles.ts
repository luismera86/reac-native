import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export const styles = StyleSheet.create({
  containerHeader: {
    width: '100%',
    marginTop: 30,
    height: 100,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10
  },
  titleHeader: {
    fontSize: 30,
    fontFamily: 'Dyna-Medium',
    color: colors.primary
  }
})
