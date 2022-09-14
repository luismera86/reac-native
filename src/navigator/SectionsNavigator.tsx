import { ImageDetailsScreen, ImagesScreen, NewImage, Sections } from '../screens'

import UserList from '../screens/UserList'
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
    <Stack.Navigator
      initialRouteName='sections'
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='sections' component={Sections} />
      <Stack.Screen name='UserList' component={UserList} />
      <Stack.Screen name='NewImage' component={NewImage} />
      <Stack.Screen name='Images' component={ImagesScreen} />
      <Stack.Screen name='ImageDetails' component={ImageDetailsScreen} />
    </Stack.Navigator>
  )
}
export default SectionsNavigator
