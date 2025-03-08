import React, { useState } from 'react'
import { auth } from '../../constant/auth'
import { MdEmail } from "react-icons/md";
import google from '../../assets/google.png'
import mailBox from '../../assets/mailbox.png'
import { motion } from 'motion/react';
import Signup from './Signup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { LuLoaderCircle } from "react-icons/lu";
import { toast } from 'react-hot-toast';
import { otpverifeid, signInFailed, signInReq, signInSucces } from '../../redux/feature/auth/signIn';
import { userLogin, verifyOtp } from '../../api/auth';
function Login() {
  const [login, setLogin] = useState(true)
  const [emailOtp, setEmailOtp] = useState(false)
  const naviagte = useNavigate()
  const { userId } = useParams()
  const { loadingSignIn, user } = useSelector((state) => state.signIn)
  const dispatch = useDispatch()
  const { register, formState: { errors }, handleSubmit } = useForm()
  const handleSignIn = async (data) => {
    try {
      console.log(data);
      dispatch(signInReq())
      const res = await userLogin(data);
      toast.success(res.message, {
        position: "top-right",
      })
      setEmailOtp(true)
      console.log(res.data.loggedInUser._id);
      
      naviagte(`/auth/${res.data.loggedInUser._id}`)
      dispatch(signInSucces())
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data.message, {
        position: "top-right",
      })
      dispatch(signInFailed(error.response.data.data))
    }

  }
  const handleOtp = async (e) => {
    try {
      dispatch(signInReq())
      console.log(userId);
      const res = await verifyOtp(e, userId)
      console.log(res);

      toast.success(res.message, {
        position: "top-right",
      })
      dispatch(otpverifeid(res.data.loggedInUser))
      console.log(res.data.loggedInUser);

      console.log(user);


      const expiresIn = res.data.accessTokenExpiryTime
      console.log(expiresIn);

      const expiryTime = new Date().getTime() + expiresIn;
      console.log(expiryTime + "expiry time");

      const loggedInUser = res.data.loggedInUser;
      console.log(loggedInUser);

      localStorage.setItem("loggedInUser", JSON.stringify({ ...loggedInUser, expiryTime }))
      if (res.success) {
        naviagte('/')
      }

    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-right",
      })
      console.log(error);

      dispatch(signInFailed(error.response.data.data))
      console.log(error.response.data.data);

    }

  }

  return (
    login ? (
      <div className='w-92 sm:w-[70%] md:w-[70%] bg-white lg:w-[50%] flex flex-col md:gap-3 lg:gap-4 md:px-3 border-b-2 p-3 rounded-xl border-r-2 border-gray-500 lg:p-5 lg:px-5' >
        <div className='flex flex-col'>
          <div className='w-full  text-[64px] font-oswald'>
            {auth.signIn.title}
          </div>
          <div className='flex gap-2 font-outfit'>
            <p>
              {auth.signIn.newUser}
            </p>
            <p className='text-[#FF1C1C] hover:cursor-pointer' onClick={() => setLogin(!login)}>
              {auth.signIn.create}
            </p>
          </div>
        </div>
        <form action="" className='flex flex-col gap-2'
          onSubmit={emailOtp ? handleSubmit(handleOtp) : handleSubmit(handleSignIn)}>
          {
            emailOtp ? (

              <motion.div className='flex flex-col gap-2'
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "circOut" }}
              >
                <div>
                  <label htmlFor="otp" className='text-[]'>{auth.signIn.otpBox} </label>
                  <div className='text-[13px]'>
                    <p>{auth.signIn.otpBoxText}</p>
                  </div>
                  <input
                    type="text"
                    id="otp"
                    className="w-full font-outfit h-[32px] border border-black rounded-sm p-2"
                    {...register('otp', {
                      required: true,
                    })}
                  />
                  {errors.otp && <span className='text-red-500 font-oswald text-[12px]'>* This field is required</span>}
                </div>

                <div className=' flex justify-center '>
                  {
                    loadingSignIn ? (
                      <button type='submit'
                        disabled={loadingSignIn}
                        className='bg-gray-400 font-outfit text-[15px] flex justify-center items-center gap-2 text-white px-4 py-1 rounded-md hover:cursor-pointer'>
                        <p>{auth.signIn.createing}</p>
                        <LuLoaderCircle className='animate-spin' />
                      </button>
                    ) : (
                      <button type='submit'
                        className='bg-[#FF1C1C] font-outfit text-[15px] text-white px-4 py-1 rounded-md hover:cursor-pointer'>
                        {auth.signIn.submit}
                      </button>
                    )
                  }
                </div>
              </motion.div>

            ) : (
              <div className='flex flex-col gap-2'>
                <div>
                  <label htmlFor="email">{auth.signIn.mobile}</label>
                  <input type="email"
                    id="email"
                    className="w-full font-outfit h-[32px] border border-black rounded-sm p-2"
                    {...register('email', {
                      required: true,
                    })}
                  />
                  {errors.email && <span className='text-red-500 font-oswald text-[12px]'>* This field is required</span>}
                </div>
                <div className=' flex justify-center '>
                  {
                    loadingSignIn ? (
                      <button type='submit'
                        disabled={loadingSignIn}
                        className='bg-gray-400 font-outfit text-[15px] flex justify-center items-center gap-2 text-white px-4 py-1 rounded-md hover:cursor-pointer'>
                        <p>{auth.signIn.createing}</p>
                        <LuLoaderCircle className='animate-spin ' />
                      </button>
                    ) : (
                      <button type='submit'
                        className='bg-[#FF1C1C] font-outfit text-[15px] text-white px-4 py-1 rounded-md hover:cursor-pointer'>
                        {auth.signIn.otp}
                      </button>
                    )
                  }
                </div>
              </div>
            )
          }

        </form>
        <div className="flex items-center gap-2">
          <div className="flex-grow border-t border-gray-400"></div>
          <div className="text-black font-medium font-outfit text-[24px]">Or</div>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className='flex flex-col  gap-3'>
          <button className='py-1 font-outfit text-[15px] flex justify-center items-center gap-2  w-full border rounded-3xl hover:cursor-pointer'>
            <div className=' flex justify-center h-8  pl-2'>
              <img src={google} alt="google" />
            </div>
            <div className='flex justify-center items-center '>
              {auth.signIn.google}
            </div>
          </button>

        </div>
        <div className='w-full '>
          <button className='text-[#FF3D00] font-outfit text-[13px]'>
            {auth.signIn.trouble}
          </button>
        </div>

      </div>

    ) : (
      <Signup setSignIn={setLogin} />
    )


  )
}

export default Login
