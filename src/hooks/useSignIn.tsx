import React from 'react'
import { useState } from 'react';

type Props = {}

const useSignIn= () => {
  const [userName, setUserName] = useState<string>('')
  const [userFirstName, setUserFirstName] = useState<string>('')
  const [userLastName, setUserLastName] = useState<string>('')
  const [userMail, setUserMail] = useState<string>('')
  const [userPassword, setUserPassword] = useState<string>('')
  const [userSignIn, setUserSignIn] = useState<boolean>(false)


  return (
    {userName,
    setUserName,
    userFirstName,
    setUserFirstName,
    userLastName,
    setUserLastName,
    userMail,
    setUserMail,
    userPassword,
    setUserPassword,
    userSignIn,
    setUserSignIn
  }
  )
}

export default useSignIn