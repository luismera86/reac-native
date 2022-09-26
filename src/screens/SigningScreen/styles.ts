import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center'
  },
  enterButton: {
    backgroundColor: colors.secondary,
    width: 200,
    padding: 10,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 6
  },
  textButton: {
    color: '#fff',
    fontFamily: 'Dyna-Regular',
    fontSize: 20
  },
  textTitle: {
    color: colors.primary,
    fontFamily: 'Dyna-Bold',
    fontSize: 24,
    marginBottom: 5,
  }
})
