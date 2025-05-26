import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import BasicDetails from './registerForm/BasicDetails'
import { motion } from 'motion/react'
import ProgressBar from './registerForm/ProgressBar'
import Documents from './registerForm/Documents'
import Partner from './registerForm/Partner'

function JoinusMain() {
  const [register, setRegister] = useState(false)
  const [next, setNext] = useState(1)
  return (
    <div className='w-full'>
      <div className='joinus-main  mt-36 w-full lg:px-36 md:px-10 sm:px-10 py-10 flex  justify-center md:justify-between items-center'>
        <div className='bg-white h-80 w-80 rounded-lg shadow-lg md:block hidden '></div>
        <div className=' flex-col items-center justify-center font-oswald '>
          <div className='font-extrabold  lg:text-[44px] md:text-[34px] text-[35px]'>Partner with my<span className='text-[#f41313] '>Smuk</span></div>
          <div className='flex justify-center items-center'>No commision ! <span className='text-[#909090]'>Your money belongs to you</span></div>
          <div className='flex justify-center items-center'>
            <button className='bg-[#f41313] mt-10 px-10 py-2 rounded-xl hover:cursor-pointer' onClick={() => setRegister(prev => !prev)}>
              Register your restaurant
            </button>
          </div>
        </div>
      </div>
      {
        register && (
          <motion.div initial={{ x: '100vw', opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}      
            exit={{ x: '100vw', opacity: 0 }}    
            transition={{ type: 'tween', duration: 0.5 }}
            className='fixed top-1/2 left-1/2 w-[80%] h-[80%] transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 flex  shadow-xl rounded-lg'>
            <div className='text-2xl flex right-4 absolute top-4 hover:cursor-pointer' onClick={() => setRegister(prev => !prev)}>
              <RxCross2 />
            </div>
            <div className='flex gap-5 h-full w-full'>
              <div className='w-[35%] '>
                <ProgressBar />
              </div>
              <div className='w-[65%] '>
                {
                  next === 1 && (
                    <BasicDetails setNext={setNext} />
                  )
                }
                {
                  next === 2 && (
                    <Documents setNext={setNext} />
                  )
                }
                {
                  next === 3 && (
                    <Partner setNext={setNext} />
                  )
                }

              </div>
            </div>

          </motion.div>

        )
      }


    </div>

  )
}

export default JoinusMain
