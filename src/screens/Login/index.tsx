import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { style } from './styles'
import useLogin from '../../hooks/useLogin'

interface Props {
    setUserPass: (text: string) => void
    setUserName: (text: string) => void
    setUserAccess: (status: boolean) => void
    userName: string
    userPass: string
}

const Login = ({setUserPass, setUserName, setUserAccess, userName, userPass } : Props) => {

    



    const onHandledUserName = (text: string) => { 
        setUserName(text)
     }

    const onHandledUserPass = (text: string) => {
      setUserPass(text)
    }
    
    const onHandledUserAccess = () => { 

        setUserAccess(true)

     }

    const onHandleUserRegister = () => {
      
    }
    


  return (
    <View style={style.container}>
      <Text style={style.textLabel}>NOMBRE DE USUARIO</Text>
      <TextInput 
      style={style.input} 
      placeholder='Nombre de usuario' 
      value={userName}
      onChangeText={onHandledUserName}
      
      />
      <Text style={style.textLabel}>CONTRASEÑA</Text>
      <TextInput 
      style={style.input} 
      placeholder='Contraseña' 
      secureTextEntry={true}
      value={userPass}
      onChangeText={onHandledUserPass}
      
      />
      <TouchableOpacity style={style.enterButton} onPress={onHandledUserAccess}>
        <Text style={style.textButton}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.enterButton} onPress={onHandleUserRegister}>
        <Text style={style.textButton}>REGISTRARSE</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Login