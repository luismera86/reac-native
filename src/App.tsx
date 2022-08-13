import { Login, Sections } from './screens'
import { StyleSheet, View } from 'react-native'

import { useState } from 'react'

export default function App() {
	const [userName, setUserName] = useState<string>('')
	const [userPass, setUserPass] = useState<string>('')
	const [userAccess, setUserAccess] = useState<boolean>(false)

  
	return (
		<View style={styles.container}>

      {
        userAccess ? 
        <Sections userName={userName} /> :


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
