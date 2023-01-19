import { combineReducers, configureStore } from "@reduxjs/toolkit"
import articlesSlice from "./slices/articlesSlice"
// import searchSlice from "./slices/searchSlice"

const rootReducer = combineReducers({
  articlesSlice,
  // searchSlice
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
