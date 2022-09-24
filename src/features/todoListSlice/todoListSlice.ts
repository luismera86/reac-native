import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AppDispatch } from '../../app/store'
import { ItemList } from '../../interfaces/ItemList'
import { URL_API } from '../../constants/firebase'

const initialState: ItemList[] = []

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    setTodoList: (state, action: PayloadAction<ItemList>) => {
      state.push(action.payload)
    },
    getTodoList: state => state,
    resetState: () => initialState,
  },
})

export const { setTodoList, resetState } = todoListSlice.actions

// Thunks

export const addTodoListDb = (todoList: ItemList) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(`${URL_API}/todoList.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoList),
      })
      const data = await response.json()
      void dispatch(getTodoListDb())

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
}

export const getTodoListDb = () => {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(`${URL_API}/todoList.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    const list = Object.keys(data).map(keys => ({
      id: keys,
      ...data[keys],
    }))
    dispatch(resetState())
    list.forEach(item => {
      dispatch(setTodoList(item))
    })
  }
}

export const deleteTodoListDb = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(`${URL_API}/todoList/${id}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()

      console.log(data)
    } catch (error) {
      console.log(error)
    }

    void dispatch(getTodoListDb())
  }
}

export default todoListSlice.reducer
