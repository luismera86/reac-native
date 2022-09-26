import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AppDispatch } from '../../app/store'
import { ItemList } from '../../interfaces/ItemList'
import { URL_API } from '../../constants/firebase'

const initialState: ItemList[] = []

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    setTodoList: (state, action: PayloadAction<ItemList[]>) => {
      return action.payload
    },
    resetState: () => initialState,
  },
})

export const { setTodoList, resetState } = todoListSlice.actions

// Thunks

export const addTodoListDb = (todoList: ItemList, userId: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const newItemList = {
        item: todoList.item,
        userId,
      }

      const response = await fetch(`${URL_API}/todoList.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItemList),
      })
      const data = await response.json()
      void dispatch(getTodoListDb())
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
    if (data !== null) {
      const list = Object.keys(data).map(keys => ({
        id: keys,
        item: data[keys].item,
        userId: data[keys].userId,
      }))
      dispatch(setTodoList(list))
    } else {
      dispatch(resetState())
    }
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
      void dispatch(getTodoListDb())
    } catch (error) {
      console.log(error)
    }
  }
}

export default todoListSlice.reducer
