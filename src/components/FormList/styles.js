import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export const styles = StyleSheet.create({
	title: {
        alignSelf: 'center',
		color: colors.secondary,
		fontSize: 25,
		fontWeight: '900',
		marginTop: 30,
	},
	formInput: {
		backgroundColor: colors.background2,
		marginTop: 10,
		marginBottom: 10,
        borderRadius: 4,
        height: 50,
        padding: 10,
        fontSize: 15,
        fontWeight: '700',
        color: colors.secondary ,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 7,
		},
		shadowOpacity: 0.41,
		shadowRadius: 9.11,

		elevation: 14,
	},
})
