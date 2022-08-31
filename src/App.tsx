import { Provider } from 'react-redux'
/* eslint-disable @typescript-eslint/space-before-function-paren */
import React from 'react'
import RootNavigator from './navigator'
import { store } from './app/store'
import { useFonts } from 'expo-font'

export default function App() {
  const [loaded] = useFonts({
    'Dyna-Regular': require('../assets/fonts/DynaPuff-Regular.ttf'),
    'Dyna-Medium': require('../assets/fonts/DynaPuff-Medium.ttf'),
    'Dyna-Bold': require('../assets/fonts/DynaPuff-Bold.ttf'),
  })

  if (!loaded) {
    return
  }

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}
