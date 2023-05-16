import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './PostSlice'
export const store = configureStore({
    reducer: {
        counter: counterSlice
    },
})