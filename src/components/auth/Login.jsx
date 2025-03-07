import React, { useState } from 'react'
import { auth } from '../../constant/auth'
import { MdEmail } from "react-icons/md";
import google from '../../assets/google.png'
import mailBox from '../../assets/mailbox.png'
import { motion } from 'motion/react';
import Signup from './Signup';
function Login() {
  const [login, setLogin] = useState(true)
  const [mobileNumberOtp, setMobileNumberOtp] = useState(false)

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
        <form action="" className='flex flex-col gap-2'>
          {
            mobileNumberOtp ? (

              <motion.div className='flex flex-col gap-2'
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "circOut" }}
              >
                <div>
                  <label htmlFor="mobileNumber" className='text-[]'>{auth.signIn.otpBox} </label>
                  <div className='text-[13px]'>
                    <p>{auth.signIn.otpBoxText}</p>
                  </div>
                  <input type="text" id="mobileNumber" className="w-full font-outfit h-[32px] border border-black rounded-sm p-2"
                  />
                </div>

                <div className=' flex justify-center '>
                  <button type=''
                    onClick={(e) => {
                      console.log(e.target.value);

                    }}
                    className='bg-[#FF1C1C] font-outfit text-[15px] text-white px-4 py-1 rounded-md hover:cursor-pointer'>
                    {auth.signIn.submit}
                  </button>
                </div>
              </motion.div>

            ) : (
              <div className='flex flex-col gap-2'>
                <div>
                  <label htmlFor="mobileNumber">{auth.signIn.mobile}</label>
                  <input type="text" id="mobileNumber" className="w-full font-outfit h-[32px] border border-black rounded-sm p-2"
                  />
                </div>
                <div className=' flex justify-center '>
                  <button type=''
                    onClick={(e) => {
                      e.preventDefault()
                      setMobileNumberOtp(true)
                    }}
                    className='bg-[#FF1C1C] font-outfit text-[15px] text-white px-4 py-1 rounded-md hover:cursor-pointer'>
                    {auth.signIn.otp}
                  </button>
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
          <button
            onClick={() => setLogin(false)}
            className='py-1 font-outfit text-[15px] flex justify-center items-center gap-2  w-full border rounded-3xl hover:cursor-pointer'>
             <div className=' flex justify-center h-8 '>
              <img src={mailBox} alt="mail" className='size-' />
            </div>
            <div className='flex justify-center items-center'>
              {auth.signIn.email}
            </div>
          </button>
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
