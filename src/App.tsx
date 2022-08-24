import { Login, Sections, SignIn } from './screens'

import AlbumNavigator from './navigator/AlbumNavigator'
import RootNavigator from './navigator'
import { View } from 'react-native'
import { useFonts } from 'expo-font'
import useLogIn from './hooks/useLogIn'
import useSignIn from './hooks/useSignIn'
import { useState } from 'react'

export default function App() {
  const [loaded] = useFonts({
    'Dyna-Regular': require('../assets/fonts/DynaPuff-Regular.ttf'),
    'Dyna-Medium': require('../assets/fonts/DynaPuff-Medium.ttf'),
    'Dyna-Bold': require('../assets/fonts/DynaPuff-Bold.ttf'),
  })

  const { userName, userAccess, setUserAccess, setUserName, setUserPass, userPass } = useLogIn()

  const {
    userFirstName,
    userLastName,
    userMail,
    setUserFirstName,
    setUserLastName,
    setUserMail,
    userPassword,
    setUserPassword,
    setUserSignIn,
    userSignIn,
  } = useSignIn()

  const [users, setUsers] = useState<object[]>([])

  if (!loaded) {
    return
  }

  return <RootNavigator />
}

/*

<View >
			{userAccess ? (
				<Sections userName={userName} setUserAccess={setUserAccess} userAccess={userAccess} />
			) : userSignIn ? (
				<SignIn
					userName={userName}
					userFirstName={userFirstName}
					userLastName={userLastName}
					userMail={userMail}
					userPassword={userPassword}
					setUserName={setUserName}
					setUserFirstName={setUserFirstName}
					setUserLastName={setUserLastName}
					setUserMail={setUserMail}
					setUserPassword={setUserPassword}
					setUsers={setUsers}
					users={users}
					setUserSignIn={setUserSignIn}
					userSignIn={userSignIn}
				/>
			) : (
				<Login
					setUserName={setUserName}
					setUserPass={setUserPass}
					setUserAccess={setUserAccess}
					userName={userName}
					userPass={userPass}
					setUserSignIn={setUserSignIn}
				/>
			)}
		</View>

*/
