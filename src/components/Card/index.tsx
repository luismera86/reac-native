import { FlexAlignType, StyleSheet, View } from 'react-native'

import React from 'react'
import colors from '../../constants/colors'

type Props = {
    backgroundColor?: string
    margin?: number
    height?: number
    width?: number
    elevation?: number
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined
    alignItems?: FlexAlignType
    children?: React.ReactNode
}

const Card = ({backgroundColor, margin, height, elevation, justifyContent, alignItems, width, children}: Props) => {

  
    const styles = StyleSheet.create({
        container: {
            margin: margin || 30,
            height: height || 500,
            width: width || 300,
            elevation: elevation || 10,
            backgroundColor: backgroundColor || colors.background,
            justifyContent: justifyContent || 'center',
            alignItems: alignItems || 'center',
        }
    });
  return (
    <View style={ styles.container }>

      {children}
      
    </View>
  )
}

export default Card

