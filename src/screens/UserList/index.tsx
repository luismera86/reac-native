import { FlatList, StyleSheet, Text, View } from 'react-native'

import { Header } from '../../components'
import React from 'react'
import { User } from '../../interfaces/user'
import { useAppSelector } from '../../app/hooks'

interface UserListe<T, U> {
  item: T
  index: U
}

const UserList = () => {
  const listUsers = useAppSelector(stack => stack.users)

  const usersList = ({ item, index }: UserListe<User, number>) => (
    <View style={styles.container}>
      <Text style={styles.text}>{item.firstname}</Text>
    </View>
  )
  return (
    <View>
      <Header userName='' />
      <Text>Lista de usuarios</Text>
      <FlatList data={listUsers} keyExtractor={item => item.id} renderItem={usersList} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
})
export default UserList
