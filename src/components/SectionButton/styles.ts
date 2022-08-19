import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  
    sectionsContainer:{
		margin: 30,
		height: 500,
		elevation: 10,
		backgroundColor: colors.background,
		justifyContent: 'center',
		alignItems: 'center',
	},
	sectionButton: {
		margin: 20,
		width: 300,
		backgroundColor: colors.secondary,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 5,
		borderRadius: 10,		
	},
	sectionButtonText: {
		fontSize: 18,
		fontFamily: 'Dyna-Regular',
		color: colors.background,
		elevation: 5
	}
});