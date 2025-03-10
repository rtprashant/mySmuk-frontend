import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    errorSignIn : null ,
    user : null,
    loadingSignIn : false ,
    otploading : false,
    logoutLoading : false,
    logoutError : null,


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
        },
        otpReq : (state)=>{
            state.otploading = true ;
        },
        otpReqSuccess : (state)=>{
            state.otploading = false;
        },
        logoutReq : (state)=>{
            state.logoutLoading = true ;
        },
        logoutSuccess : (state)=>{
            state.logoutLoading = false ;
        },
        logoutFailed : (state , action)=>{
            state.logoutLoading = false ;
            state.logoutError = action.payload ;
        }
    }
})

export const { signInFailed , signInReq , signInSucces , otpverifeid , otpReqSuccess , otpReq , logoutFailed
    , logoutReq , logoutSuccess 
 } = signInSlice.actions
export default signInSlice.reducer;