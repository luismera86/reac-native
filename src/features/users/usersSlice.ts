import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { User } from '../../interfaces/user'
import { users } from '../../constants/data/users'

const initialState: User[] = users

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload)
    },
  },
})

export const { addUser } = usersSlice.actions
export default usersSlice.reducer
