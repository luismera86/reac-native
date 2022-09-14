import { ImageDetailsScreen, ImagesScreen, NewImage } from '../screens'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
const ImagesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='NewImage'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name='NewImage' component={NewImage} />
      <Stack.Screen name='Images' component={ImagesScreen} />
      <Stack.Screen name='ImageDetails' component={ImageDetailsScreen} />
    </Stack.Navigator>
  )
}

export default ImagesNavigator
