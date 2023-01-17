import { combineReducers, configureStore } from "@reduxjs/toolkit"
import articlesSlice from "./slices/articlesSlice"

const rootReducer = combineReducers({
  articlesSlice
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
