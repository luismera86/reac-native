import ImagesNavigator from './ImagesNavigator'
import { Sections } from '../screens'
import UserList from '../screens/UserList'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RootStackParamList = {
  sections: undefined
  UserList: undefined
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
    </Stack.Navigator>
  )
}
export default SectionsNavigator
