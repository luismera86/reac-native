import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AppDispatch } from '../../app/store'
import { Messages } from '../../interfaces/Messages'
import { URL_API } from '../../constants/firebase'

const initialState: Messages[] = []

const messagesBoardSlice = createSlice({
  name: 'messagesBoard',
  initialState,
  reducers: {
    setMessagesBoard: (state, action: PayloadAction<Messages[]>) => {
      return action.payload
    },
  },
})

export const { setMessagesBoard } = messagesBoardSlice.actions

export default messagesBoardSlice.reducer

export const addMessage = (message: string, userFirstName: string, userLastName: string) => async (dispatch: AppDispatch) => {
  const timestamp = Date.now()
  const newMessage = {
    message,
    userFirstName,
    userLastName,
    timestamp,
  }
  const response = await fetch(`${URL_API}/messages.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMessage),
  })
  const data = await response.json()
  void dispatch(getMessages())
}

export const getMessages = () => async (dispatch: AppDispatch) => {
  const response = await fetch(`${URL_API}/messages.json`)
  const data = await response.json()
  const messages: Messages[] = []
  for (const key in data) {
    messages.push({
      id: key,
      message: data[key].message,
      userFirstName: data[key].userFirstName,
      userLastName: data[key].userLastName,
      timestamp: data[key].timestamp,
    })
  }
  dispatch(setMessagesBoard(messages))
}

export const deleteMessage = (id: string) => async (dispatch: AppDispatch) => {
  const response = await fetch(`${URL_API}/messages/${id}.json`, {
    method: 'DELETE',
  })
  const data = await response.json()
  void dispatch(getMessages())
}
