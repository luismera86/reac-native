import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchImages, insertImage } from '../../db'

import { AppDispatch } from '../../app/store'
import ImageModel from '../../models/imageModel'

const initialState: ImageModel[] = []

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImage: (state, action: PayloadAction<ImageModel>) => {
      const newImage = new ImageModel(
        action.payload.id?.toString(),
        action.payload.title,
        action.payload.description,
        action.payload.image
      )
      state.push(newImage)
    },
    getImages: (state, action: PayloadAction<ImageModel[]>) => {
      state = action.payload
      return state
    },
  },
})

export const { addImage, getImages } = imagesSlice.actions

export const saveImage = (title: string, description: string, image: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await insertImage(image, title, description)
      dispatch(addImage({ id: result.insetId, title, description, image }))
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export const loadImages = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await fetchImages()
      console.log(result)
      dispatch(getImages(result.rows._array))
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default imagesSlice.reducer
