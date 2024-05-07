import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import chatReducer from "../features/chat/chatSlice"
import { apiSlice } from "../features/history/apiSlice"

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
