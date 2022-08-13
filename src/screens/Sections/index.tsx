import { Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { style } from './styles'

interface Props {
    userName: string
}

const Sections = ({ userName }: Props) => {
  return (
    <View style={style.container}>
        <View style={style.containerHeader}>
      <Text style={style.titleHeader}>Bienvenido/a {userName}</Text>

        </View>
      <View style={style.sectionsContainer}>
        <TouchableOpacity style={style.sectionButton}>
            <Text style={style.sectionButtonText}>Lista de tareas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.sectionButton}>
            <Text style={style.sectionButtonText}>Juegos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.sectionButton}>
            <Text style={style.sectionButtonText}>Album de fotos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.sectionButton}>
            <Text style={style.sectionButtonText}>Otra sección</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={style.sectionButton}>
            <Text style={style.sectionButtonText}>VOLVER</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Sections