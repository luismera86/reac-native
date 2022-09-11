import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { URL_API } from '../../constants/firebase'
import { User } from '../../interfaces/user'

const initialState: User[] = []

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload)
    },
    getUser: state => {
      return state
    },
  },
})

export const { addUser } = usersSlice.actions
export const addUsersDb = (users: User) => {
  console.log('entrando en addUser')
  return async () => {
    try {
      console.log('por hacer el fetch')
      const response = await fetch(`${URL_API}/users.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(users),
      })
      const data = await response.json()

      console.log(data)
      console.log('termino')
    } catch (error) {
      console.log(error)
    }
  }
}

export default usersSlice.reducer
