import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export const style = StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: colors.background,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textLabel: {
		fontSize: 18,
		fontWeight: 'bold',
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
	enterButton: {
		backgroundColor: colors.secondary,
		width: 150,
		padding: 10,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		elevation: 6,
	},
	textButton: {
		color: '#fff',
		fontWeight: 'bold'
	}
})
