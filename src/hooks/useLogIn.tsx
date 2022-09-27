import { useState } from 'react'

const useLogIn = () => {
  const [userName, setUserName] = useState<string>('')
  const [userPass, setUserPass] = useState<string>('')
  const [userAccess, setUserAccess] = useState<boolean>(false)

  return {
    userName,
    setUserName,
    userPass,
    setUserPass,
    userAccess,
    setUserAccess,
  }
}

export default useLogIn
