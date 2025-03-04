import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sideBar: false

}
const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        openMenu: (state) => {
            state.sideBar = true
        },
        closeMenu: (state) => {
            state.sideBar = false
        }
    }
}
)

export const { openMenu , closeMenu } = menuSlice.actions
export default menuSlice.reducer