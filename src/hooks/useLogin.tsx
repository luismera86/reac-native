import React, { useState } from 'react'

type Props = {}

const useLogin = () => {

    const [userName, setUserName] = useState<string>('')
	const [userPass, setUserPass] = useState<string>('')
	const [userAccess, setUserAccess] = useState<boolean>(false)

  return (
    {
        userName,
        setUserName,
        userPass,
        setUserPass,
        userAccess,
        setUserAccess
    }
  )
}

export default useLogin