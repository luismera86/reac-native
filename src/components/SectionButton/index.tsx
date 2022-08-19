import { Text, TouchableOpacity } from 'react-native'

import React from 'react'
import { styles } from './styles'

type Props = {
    title: string
}

const SectionButton = ({title} : Props) => {
	return (
		<TouchableOpacity style={styles.sectionButton}>
			<Text style={styles.sectionButtonText}>{title}</Text>
		</TouchableOpacity>
	)
}

export default SectionButton
