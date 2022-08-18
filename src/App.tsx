import { Login, Sections } from './screens'
import { StyleSheet, View } from 'react-native'

import { useEffect } from 'react'
import { useFonts } from 'expo-font'
import useLogin from './hooks/useLogin'

export default function App() {
	
  const [loaded] = useFonts({
    'Dyna-Regular': require('../assets/fonts/DynaPuff-Regular.ttf'),
    'Dyna-Medium': require('../assets/fonts/DynaPuff-Medium.ttf'),
    'Dyna-Bold': require('../assets/fonts/DynaPuff-Bold.ttf'),
  })
  
  const { userName, userAccess, setUserAccess, setUserName, setUserPass, userPass } = useLogin()
 
  useEffect(() => {
    console.log(userAccess)
  }, [userAccess])
  

if(!loaded) {
  return 
}
  
	return (
		<View style={styles.container}>

      {
        userAccess ? 
        <Sections userName={userName} setUserAccess={setUserAccess} userAccess={userAccess} /> :


        <Login/>

      }

		</View>
	)
}

const styles = StyleSheet.create({
	container: {},
})
