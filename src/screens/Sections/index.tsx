/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'

import AlbumNavigator from '../../navigator/AlbumNavigator'

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

  return <AlbumNavigator />
}

export default Sections
