import { Text, View } from 'react-native'

import { Card } from '../../components'
import React from 'react'
import { styles } from './styles'

type Props = {}

const PhotoAlbum = (props: Props) => {
  return (
    <View style={styles.container}>
        <Card>

            <Text>PhotoAlbum</Text>
        </Card>

    
    </View>
  )
}

export default PhotoAlbum