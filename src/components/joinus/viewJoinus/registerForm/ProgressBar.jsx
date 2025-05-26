import React, { useContext, useState } from 'react'
import { context } from '../../../context/MysmukContext'

function ProgressBar() {
  const [currentStep, setCurrentStep] = useState(1)
  const {progress} = useContext(context)
  return (
    <div className='bg-white rounded-2xl w-full h-full p-10' >
      <div>
        <h2 className='font-outfit text-[20px]'>Complete your registration </h2>
        <div className='border'></div>
      </div>
    <div className='mt-10 relative'>

  <div className='flex gap-3 items-center mb-10 relative z-40'>
    <div className={`relative flex justify-center items-center h-10 w-10 rounded-full bg-white p-2 ${progress?.basicDetails ? "border-green-500" : "border-[#909090]"}  border z-50`}>
      <img src="https://b.zmtcdn.com/data/o2_assets/472f589fff7dc51f8c02e1827f895f761715062518.png" alt="menu icon" />
     
      <div className={`absolute left-1/2 top-full w-[2px] h-12 transform  transition-colors border ${progress?.basicDetails ? "border-green-500" : "border-[#909090]"} -translate-x-1/2 z-10`}></div>
    </div>
    <div className='font-oswald'>Restaurant Basic Details</div>
  </div>


  <div className='flex gap-3 items-center mb-10 relative'>
    <div className={`relative flex justify-center items-center h-10 w-10 rounded-full bg-white p-2 ${progress?.documents ? "border-green-500" : "border-[#909090]"}  border z-50`}>
      <img src="https://b.zmtcdn.com/data/o2_assets/6a45315ad2a665eebcc0e593ada2c0601715062549.png" alt="menu icon" />
   
      <div className={`absolute left-1/2 top-full w-[2px] h-12  border ${progress?.documents ? "border-green-500" : "border-[#909090]"} -translate-x-1/2 z-10 transform  transition-colors`}></div>
    </div>
    <div className='font-oswald'>Restaurant documents</div>
  </div>

  <div className='flex gap-3 items-center mb-10 relative'>
    <div className='flex justify-center items-center h-10 w-10 rounded-full bg-white p-2 border-[#909090] border z-50'>
      <img src="https://b.zmtcdn.com/data/o2_assets/8fdd6ced9af8774b5ec7cc73b522f3331715062557.png" alt="menu icon" />
    </div>
    <div className='font-oswald'>Partner contracts</div>
  </div>

</div>


    </div>
  )
}

export default ProgressBar
