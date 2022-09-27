import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = false

const userAccessSlice = createSlice({
  name: 'userAccess',
  initialState,
  reducers: {
    setUserAccess: (state, action: PayloadAction<boolean>) => {
      return action.payload
    },
  },
})

export const { setUserAccess } = userAccessSlice.actions

export default userAccessSlice.reducer
