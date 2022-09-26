import { ImageDetailsScreen, ImagesListScreen, ImagesScreen } from '../screens'

import { FontAwesome } from '@expo/vector-icons'
import NewImageScreen from '../screens/NewImageScreen'
import React from 'react'
import SectionsScreen from '../screens/SectionsScreen'
import TodoListAppScreen from '../screens/TodoListAppScreen'
import { TouchableOpacity } from 'react-native'
import colors from '../constants/colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type RootStackParamList = {
  sections: undefined
  UserList: undefined
  Images: undefined
  NewImage: undefined
  ImageDetails: undefined
  ImagesList: undefined
  AppList: undefined
}

const Stack = createNativeStackNavigator()

const SectionsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='sections' screenOptions={{}}>
      <Stack.Screen
        name='sections'
        component={SectionsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='NewImage'
        component={NewImageScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.primary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          title: 'Nueva Imagen',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name='Images' component={ImagesScreen} />
      <Stack.Screen
        name='ImageDetails'
        component={ImageDetailsScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.primary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          title: 'Detalle de Imagen',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name='AppList'
        component={TodoListAppScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='ImagesList'
        component={ImagesListScreen}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.primary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          title: 'Album de Fotos',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('NewImage')}>
              <FontAwesome name='plus-circle' size={24} color={colors.secondary} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  )
}
export default SectionsNavigator
