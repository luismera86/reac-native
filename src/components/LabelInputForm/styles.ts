import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		width: '100%',
		alignItems: 'center',
	},
	textLabel: {
		marginTop: 10,
		fontSize: 20,
		fontFamily: 'Dyna-Medium',
		color: colors.primary,
	},
	input: {
		width: '80%',
		backgroundColor: '#fff',
		marginVertical: 10,
		fontSize: 20,
		height: 50,
		padding: 10,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 4,
	},
})
