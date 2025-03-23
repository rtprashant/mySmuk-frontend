import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    packageLoading : false,
    packageError : null ,
    addedpackage : null

}
const addPackageSlice = createSlice({
    name:"addPackage",
    initialState,
    reducers : {
        packageAddStart : (state)=>{
            state.addedpackage = null ;
            state.packageError = null ;
            state.packageLoading = true
        },
        packageAddSuccess : (state , action)=>{
            state.addedpackage = action.payload ;
            state.packageError = null ;
            state.packageLoading = false
        },
        packageAddFailure : (state , action)=>{
            state.addedpackage = null ;
            state.packageError = action.payload ;
            state.packageLoading = false
        },
    }
})
export const { packageAddFailure , packageAddStart , packageAddSuccess} = addPackageSlice.actions
export default addPackageSlice.reducer