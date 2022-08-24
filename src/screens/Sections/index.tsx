import { Card, Header, SectionButton } from '../../components'
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'

import AlbumNavigator from '../../navigator/AlbumNavigator'
import { View } from 'react-native'
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
    <View style={style.container}>
      <Header userName='Luis' />
      <Card width={350}>
        <SectionButton title='App List' />
      </Card>
    </View>
  )
}

export default Sections
