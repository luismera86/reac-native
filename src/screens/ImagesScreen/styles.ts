import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.background,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    elevation: 3,
    borderRadius: 5,
  },
  info: {},
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: 'Dyna-Regular',

  },
  image: {
    width: 75,
    height: 75,
    backgroundColor: 'red',
    borderRadius: 10,
    marginRight: 10,
  },
})
