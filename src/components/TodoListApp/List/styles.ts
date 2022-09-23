import { StyleSheet } from 'react-native'
import colors from '../../../constants/colors'

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '800',
    marginVertical: 3,
    borderBottomWidth: 1,
    width: '90%',
  },
  container: {
    marginVertical: 10,
  },
  deleteButton: {
    fontSize: 22,
    fontWeight: '900',
    color: colors.tertiary,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textShadowColor: 'black',
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
  },
  modalButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  waring: {
    fontSize: 60,
    fontWeight: '900',
    color: colors.tertiary,
  },
  quest: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
})
