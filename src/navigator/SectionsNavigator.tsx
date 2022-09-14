import { ImageDetailsScreen, ImagesScreen, NewImage, Sections } from '../screens'

import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import UserList from '../screens/UserList'
import colors from '../constants/colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RootStackParamList = {
  sections: undefined
  UserList: undefined
  Images: undefined
  NewImage: undefined
  ImageDetails: undefined
}

const Stack = createNativeStackNavigator()

const SectionsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='sections' screenOptions={{}}>
      <Stack.Screen name='sections' component={Sections} />
      <Stack.Screen name='UserList' component={UserList} />
      <Stack.Screen name='NewImage' component={NewImage} />
      <Stack.Screen
        name='Images'
        component={ImagesScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('NewImage')}>
              <FontAwesome name='plus-circle' size={24} color={colors.secondary} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name='ImageDetails' component={ImageDetailsScreen} />
    </Stack.Navigator>
  )
}
export default SectionsNavigator
