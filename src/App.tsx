import { Login, Sections } from './screens'
import { StyleSheet, View } from 'react-native'

import { useFonts } from 'expo-font'
import { useState } from 'react'

export default function App() {
	
  const [loaded] = useFonts({
    'Dyna-Regular': require('../assets/fonts/DynaPuff-Regular.ttf'),
    'Dyna-Medium': require('../assets/fonts/DynaPuff-Medium.ttf'),
    'Dyna-Bold': require('../assets/fonts/DynaPuff-Bold.ttf'),
  })
  
 

  const [userName, setUserName] = useState<string>('')
	const [userPass, setUserPass] = useState<string>('')
	const [userAccess, setUserAccess] = useState<boolean>(false)


  
	return (
		<View style={styles.container}>

      {
        userAccess ? 
        <Sections userName={userName} setUserAccess={setUserAccess} userAccess={userAccess} /> :


        <Login
          setUserName={setUserName}
          setUserPass={setUserPass}
          setUserAccess={setUserAccess}
          userName={userName}
          userPass={userPass}
        />

      }
		</View>
	)
}

const styles = StyleSheet.create({
	container: {},
})
