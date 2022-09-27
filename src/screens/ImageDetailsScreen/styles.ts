import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: colors.primary,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: colors.primary,
  },
})
