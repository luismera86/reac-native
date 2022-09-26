import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AppDispatch } from '../../app/store'
import { URL_API } from '../../constants/firebase'
import { User } from '../../interfaces/User'

const initialState: User[] = []

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User[]>) => {
      return action.payload
    },
    getUser: state => {
      getUsers()
      return state
    },
  },
})

export const { setUser, getUser } = usersSlice.actions

// Thunks

export const addUsersDb = (users: User) => {
  console.log('entrando en addUser')
  return async (dispatch: AppDispatch) => {
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
      void dispatch(getUsers())
    } catch (error) {
      console.log(error)
    }
  }
}

export const getUsers = () => {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(`${URL_API}/users.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    const list = Object.keys(data).map(keys => ({
      ...data[keys],
      id: keys,
    }))

    dispatch(setUser(list))
  }
}

export default usersSlice.reducer
