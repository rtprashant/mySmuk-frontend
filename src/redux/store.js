import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './feature/MobileMenu/MobileMenu'
import signInSlice from'./feature/auth/signIn'
import addPackageSlice from './feature/admin/addPackage'
import  filterSlice from './feature/user/Filter'
export const store = configureStore({
  reducer: {
    menu : menuSlice,
    signIn : signInSlice,
    addPackage: addPackageSlice,
    filter :  filterSlice
  },
})