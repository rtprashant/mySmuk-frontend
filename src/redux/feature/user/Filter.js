import { createSlice } from '@reduxjs/toolkit'
const  initialState = {
    filterLoading : false,
    filterError : null ,
    filterData : null
}

const filterSlice = createSlice({
    name : "fliter",
    initialState,
    reducers : {
        startFilter : (state)=>{
            state.filterData = null,
            state.filterError = null ,
            state.filterLoading = true
        },
        errorInFilter : (state,action)=>{
            state.filterData = null,
            state.filterError = action.payload ,
            state.filterLoading = false
        },
        successFilter : (state, action)=>{
            state.filterData = action.payload,
            state.filterError = null ,
            state.filterLoading = false
        },
    }
})

export const {  startFilter , successFilter , errorInFilter } = filterSlice.actions
export default filterSlice.reducer