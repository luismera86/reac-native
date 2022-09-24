import { configureStore } from '@reduxjs/toolkit'
import imagesReducer from '../features/imagesSlice/imagesSlice'
import todoListReducer from '../features/todoListSlice/todoListSlice'
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    images: imagesReducer,
    todoList: todoListReducer,
  },
  middleware (getDefaultMiddleware) { // Por más que este usando Typescript, coloco el middleware para que no me tire error ya que todavía no conozco como funciona la serialization de datos de redux
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
