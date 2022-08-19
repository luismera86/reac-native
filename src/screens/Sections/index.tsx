import { ButtonNavigator, Card, Header, SectionButton } from '../../components'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import PhotoAlbum from '../PhotoAlbum/index'
import { style } from './styles'

interface Props {
	userName: string
	userAccess: boolean
	setUserAccess: (status: boolean) => void
}

const Sections = ({ userName, userAccess, setUserAccess }: Props) => {
	const [photoAlbumAccess, setPhotoAlbumAccess] = useState(false)
	const onHandledUserAccess = () => {
		setUserAccess(!userAccess)
	}

	const onHandlePhotoAlbumAccess = () => {
		setPhotoAlbumAccess(!photoAlbumAccess)
	}

	return (
		<>
			{photoAlbumAccess ? (
				<PhotoAlbum userName={userName} photoAlbumAccess={photoAlbumAccess}  setPhotoAlbumAccess={setPhotoAlbumAccess}/>
			) : (
				<View style={style.container}>
					<Header userName={userName}/>
					<Card width={340}>
						<SectionButton title='ALBUM DE FOTOS' onPress={onHandlePhotoAlbumAccess} />
					</Card>

					<ButtonNavigator title='VOLVER' onPress={onHandledUserAccess} />
				</View>
			)}
		</>
	)
}

export default Sections
