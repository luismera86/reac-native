/* eslint-disable @typescript-eslint/restrict-plus-operands */

import * as FileSystem from 'expo-file-system'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import ImageModel from '../../models/imageModel'

const initialState: ImageModel[] = []

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImage: (state, action: PayloadAction<ImageModel>) => {
      const newImage = new ImageModel(
        Date.now().toLocaleString(),
        action.payload.title,
        action.payload.description,
        action.payload.image
      )
      state.push(newImage)
    },
  },
})

export const { addImage } = imagesSlice.actions

export const saveImage = (title: string, description: string, image: string) => {
  return async (dispatch: any) => {
    const fileName = image.split('/').pop()
    const newPath = FileSystem.documentDirectory + fileName
    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      })
      dispatch(addImage({ title, description, image: newPath }))
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
export default imagesSlice.reducer
