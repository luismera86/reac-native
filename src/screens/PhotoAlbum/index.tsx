import { ButtonNavigator, Card, Header, SectionButton } from '../../components'

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { RootStackParamList } from '../../navigator/RootStackPrams';
import { View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

type Props = {
	userName: string
	setPhotoAlbumAccess: (status: boolean) => void
	photoAlbumAccess: boolean
}

type ScreenProps = NativeStackNavigationProp<RootStackParamList>

const PhotoAlbum = ({ userName, setPhotoAlbumAccess, photoAlbumAccess}: Props) => {
	
	const navigator = useNavigation<ScreenProps>()
	const onHandledUserAccess = () => {
		
		setPhotoAlbumAccess(!photoAlbumAccess)
		
	}
	const onHandleNavigateAlbum1 = () => {
		navigator.navigate('Album1')
	}
	const onHandleNavigateAlbum2 = () => {
		navigator.navigate('Album2')
	}
	const onHandleNavigateAlbum3 = () => {
		navigator.navigate('Album3')
	}
	return (
		<View style={styles.container}>
			
			<Header userName={userName}/>
			
			<Card width={340} >
				
				<SectionButton title='ALBUM 1' onPress={onHandleNavigateAlbum1} /> 
				<SectionButton title='ALBUM 2' onPress={onHandleNavigateAlbum2} /> 
				<SectionButton title='ALBUM 3' onPress={onHandleNavigateAlbum3} /> 
			</Card>
			<ButtonNavigator onPress={onHandledUserAccess} title='VOLVER'/>
		</View>
	)
}

export default PhotoAlbum
