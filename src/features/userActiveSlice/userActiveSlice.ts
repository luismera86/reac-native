import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { User } from '../../interfaces/User'

const initialState: User = {
  id: '',
  firstname: '',
  lastname: '',
  email: '',
  password: '',
}

const userActiveSlice = createSlice({
  name: 'userActive',
  initialState,
  reducers: {
    setUserActive: (state, action: PayloadAction<User>) => {
      return action.payload
    },
  },
})

export const { setUserActive } = userActiveSlice.actions

export default userActiveSlice.reducer
