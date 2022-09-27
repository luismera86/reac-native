import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Tabs from './Tabs'
import UserNavigator from './UserNavigator'
import { useAppSelector } from '../app/hooks'

const RootNavigator = () => {
  const userAccess = useAppSelector(state => state.userAccess)
  return <NavigationContainer>{userAccess ? <Tabs /> : <UserNavigator />}</NavigationContainer>
}

export default RootNavigator
