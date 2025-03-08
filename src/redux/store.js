import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './feature/MobileMenu/MobileMenu'
import signInSlice from'./feature/auth/signIn'
export const store = configureStore({
  reducer: {
    menu : menuSlice,
    signIn : signInSlice,

  },
})