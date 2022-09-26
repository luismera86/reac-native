import { configureStore } from '@reduxjs/toolkit'
import imagesReducer from '../features/imagesSlice/imagesSlice'
import todoListReducer from '../features/todoListSlice/todoListSlice'
import userAccessReducer from '../features/userAccessSlice/userAccessSlice'
import userActiveReducer from '../features/userActiveSlice/userActiveSlice'
import usersReducer from '../features/usersSlice/usersSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    images: imagesReducer,
    todoList: todoListReducer,
    userAccess: userAccessReducer,
    userActive: userActiveReducer,
  },
  middleware (getDefaultMiddleware) { // Por más que este usando Typescript, coloco el middleware para que no me tire error ya que todavía no conozco como funciona la serialization de datos de redux
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
