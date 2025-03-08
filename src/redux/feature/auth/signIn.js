import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    errorSignIn : null ,
    user : null,
    loadingSignIn : false ,
}
const signInSlice = createSlice({
    name : "signIn",
    initialState : initialState ,
    reducers: {
        signInReq : (state)=>{
            state.loadingSignIn = true ;
            state.errorSignIn = null ;
            state.user = null;
        },
        signInSucces : ( state )=>{
            state.loadingSignIn = false;
            state.errorSignIn = null ;
            state.user = null
        },
        signInFailed : (state , action)=>{
            state.loadingSignIn = false ;
            state.errorSignIn = action.payload ;
            state.user = null ;
        },
        otpverifeid : (state , action)=>{
            state.loadingSignIn = false;
            state.errorSignIn = null ;
            state.user = action.payload;
        }
    }
})

export const { signInFailed , signInReq , signInSucces , otpverifeid } = signInSlice.actions
export default signInSlice.reducer;