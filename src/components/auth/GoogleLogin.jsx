import React, { useEffect } from 'react'
import google from '../../assets/google.png'
import { auth } from '../../constant/auth'
import { useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { otpverifeid, signInFailed, signInReq } from '../../redux/feature/auth/signIn'
import { googleLogin } from '../../api/auth'
function GoogleLogin() {
    const { user } = useSelector((state) => state.signIn)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const googleRes = async (res) => {
        const code = res.code;
        try {
            dispatch(signInReq())
            const response = await googleLogin(code)
            const loggedInUser = response.data.loggedInUser
            const expiresIn = response.data.accessTokenExpiryTime
            dispatch(otpverifeid(response.data.loggedInUser))
            localStorage.setItem("expiryTime", JSON.stringify(expiresIn))
            localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser))
            navigate('/')
        } catch (error) {
            console.log(error);
            dispatch(signInFailed(error.response.data.data))

        }
    }
    const handleClick = useGoogleLogin(
        {
            onSuccess: googleRes,
            onError: googleRes,
            flow: "auth-code"
        }
    )
    // useEffect(() => {
    //     if (user) {

            
    //     }


    // }, [user]);

    return (
        <button
            onClick={handleClick} className='py-1 font-outfit text-[15px] flex justify-center items-center gap-2  w-full border rounded-3xl hover:cursor-pointer'>
            <div className=' flex justify-center h-8'>
                <img src={google} alt="google" />
            </div>
            <div className='flex justify-center items-center '>
                {auth.signIn.google}
            </div>
        </button>
    )
}

export default GoogleLogin
