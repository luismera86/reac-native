import ImageModel from '../../models/imageModel'
import { createSlice } from '@reduxjs/toolkit'

const initialState: ImageModel[] = []

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImage: (state, action) => {
      const newImage = new ImageModel(action.payload.id, action.payload.title, action.payload.description)
      state.push(newImage)
    },
  },
})

export const { addImage } = imagesSlice.actions

export default imagesSlice.reducer
