import React, { useState } from 'react'
import { auth } from '../../constant/auth'
import { FaFacebook } from 'react-icons/fa6'
import { MdEmail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
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
              
                <div className='flex flex-col gap-2'>
                  {/* <div>
                    <label htmlFor="mobileNumberOtp">{auth.signIn.otpBox}</label>
                    
                    <input type="text" id="mobileNumberOtp" className="w-full  font-outfit h-[32px] border border-black rounded-sm p-2"
                    />
                  </div> */}
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
                </div>
             
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
          <button className='py-1 font-outfit text-[15px] flex justify-center items-center gap-2  w-full border rounded-3xl hover:cursor-pointer'>
            <div className=''>
              <MdEmail className='size-7' />
            </div>
            <div className='flex justify-center items-center'>
              {auth.signIn.email}
            </div>
          </button>
          <button className='py-1 font-outfit text-[15px] flex justify-center items-center gap-2  w-full border rounded-3xl hover:cursor-pointer'>
            <div className=''>
              <FaGoogle className='size-7' />
            </div>
            <div className='flex justify-center items-center'>
              {auth.signIn.google}
            </div>
          </button>
          <button className='py-1 font-outfit text-[15px] flex justify-center items-center gap-2  w-full border rounded-3xl hover:cursor-pointer'>
            <div className=''>
              <FaFacebook className='size-7' />
            </div>
            <div className='flex justify-center items-center'>
              {auth.signIn.facebook}
            </div>
          </button>
          <button className='py-1 font-outfit text-[15px] flex justify-center items-center gap-2  w-full border rounded-3xl hover:cursor-pointer'>
            <div className=''>
              <FaApple className='size-7' />
            </div>
            <div className='flex justify-center items-center'>
              {auth.signIn.apple}
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
      <div className='w-92 sm:w-[70%] md:w-[70%] bg-white lg:w-[50%] flex flex-col md:gap-3 lg:gap-4 md:px-3 border-b-2 p-3 rounded-xl border-r-2 border-gray-500 lg:p-5 lg:px-5'>
        <div className='flex flex-col'>
          <div className='w-full sm:text-[35px] lg:text-[51px] font-oswald'>
            {auth.signUp.title}
          </div>
          <div className='flex gap-2 font-outfit'>
            <p>
              {auth.signUp.existingUser}
            </p>
            <p className='text-[#FF1C1C] hover:cursor-pointer' onClick={() => setLogin(!login)}>
              {auth.signUp.signIn}
            </p>
          </div>
        </div>
        <div className='font-outfit' >
          {
            auth.signUp.signupwithmail
          }
        </div>
        <div>
          <label htmlFor="email" className='font-outfit text-[13px]'>{auth.signUp.email}</label>
          <input type="email" id="email" className="w-full font-outfit h-[32px] border border-black rounded-sm p-2"
          />
        </div>
        <div className='flex gap-2'>
          <div className=''>
            <label htmlFor="firstName" className='font-outfit text-[13px]'>{auth.signUp.first}</label>
            <input type="text" id="firstName" className="w-full font-outfit h-[32px] border border-black rounded-sm p-2"
            />
          </div>
          <div>
            <label htmlFor="lastName" className='font-outfit text-[13px]'>{auth.signUp.last}</label>
            <input type="text" id="lastName" className="w-full font-outfit h-[32px] border border-black rounded-sm p-2"
            />
          </div>

        </div>
        <div>
          <div className='font-outfit text-[13px]'>
            {auth.signUp.date}

          </div>
          <div>
            <div className='flex gap-2'>
              <div>
                <label htmlFor="day" className='font-outfit text-[13px]'>{auth.signUp.Day}</label>
                <input type="text" id="day" className="w-full font-outfit h-[32px] border border-black rounded-sm p-2"
                />
              </div>
              <div >
                <label htmlFor="month" className='font-outfit text-[13px]'>{auth.signUp.month}</label>
                <input type="text" id="month" className="w-full font-outfit h-[32px] border border-black rounded-sm p-2"
                />
              </div>
              <div>
                <label htmlFor="year" className='font-outfit text-[13px]'>{auth.signUp.year}</label>
                <input type="text" id="year" className="w-full font-outfit h-[32px] border border-black rounded-sm p-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=' flex justify-center mt-2'>
          <button className='bg-[#FF1C1C] font-outfit text-[15px] text-white px-4 py-1 rounded-md hover:cursor-pointer'>
            {auth.signUp.create}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-grow border-t border-gray-400"></div>
          <div className="text-black font-medium font-outfit text-[24px]">Or</div>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className='w-full flex gap-6 justify-center items-center'>
          <button className='hover:cursor-pointer text-4xl'><FaGoogle /></button>
          <button className='hover:cursor-pointer text-4xl'><FaFacebook /></button>
          <button className='hover:cursor-pointer text-4xl'><FaApple /></button>
        </div>
      </div>
    )


  )
}

export default Login
