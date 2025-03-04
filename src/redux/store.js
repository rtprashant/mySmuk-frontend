import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './feature/MobileMenu/MobileMenu'

export const store = configureStore({
  reducer: {
    menu : menuReducer
  },
})