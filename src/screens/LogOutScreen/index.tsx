import { Card, Header, SectionButton } from '../../components'

import React from 'react'
import { View } from 'react-native'
import { setUserAccess } from '../../features/userAccessSlice/userAccessSlice'
import { style } from './styles'
import { useAppDispatch } from '../../app/hooks'

const LogOutScreen = () => {
  const dispatch = useAppDispatch()
  const logOut = () => {
    void dispatch(setUserAccess(false))
  }

  return (
    <View style={style.container}>
      <Header userName='' />
      <Card width={350}>
        <SectionButton title='SALIR' onPress={logOut} />
      </Card>
    </View>
  )
}

export default LogOutScreen
