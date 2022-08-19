import { ButtonNavigator, Card, Header, SectionButton } from '../../components'
import { Text, View } from 'react-native'

import React from 'react'
import { styles } from './styles'
import useLogIn from '../../hooks/useLogIn'

type Props = {
	userName: string
	setPhotoAlbumAccess: (status: boolean) => void
	photoAlbumAccess: boolean
}

const PhotoAlbum = ({ userName, setPhotoAlbumAccess, photoAlbumAccess}: Props) => {
	
	const onHandledUserAccess = () => {
		
		setPhotoAlbumAccess(!photoAlbumAccess)
		
	}
	const prueba = () => {
		console.log('hola')
	}
	return (
		<View style={styles.container}>
			<Header userName={userName}/>
			
			<Card width={340} >
				
				<SectionButton title='Carpeta 1' onPress={prueba} /> 
				{/* <SectionButton title='Carpeta 2' onPress={} /> */}
				{/* <SectionButton title='Carpeta 4' onPress={} /> */}
				{/* <SectionButton title='Carpeta 5' onPress={} /> */}
			</Card>
			<ButtonNavigator onPress={onHandledUserAccess} title='VOLVER'/>
		</View>
	)
}

export default PhotoAlbum
