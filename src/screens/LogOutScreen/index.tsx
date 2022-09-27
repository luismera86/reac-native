import { Card, Header, SectionButton } from '../../components'
import { Text, View } from 'react-native'

import React from 'react'
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
        <Text style={style.text}>Estas apunto de cerrar la session</Text>
        <SectionButton title='CERRAR SESSION' onPress={logOut} />
      </Card>
    </View>
  )
}

export default LogOutScreen
