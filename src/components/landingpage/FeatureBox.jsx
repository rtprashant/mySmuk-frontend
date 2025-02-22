import React from 'react'

function FeatureBox({ title, para }) {
  return (
    <div className='lg:w-[301px] md:w-[176px] sm:w-[140px] w-[120px] h-auto bg-[#FFC7C7] flex flex-col gap-2 justify-center items-center rounded-2xl shadow-xl p-3'>
      <h2 className='lg:text-[20px] md:text-[16px] sm:text-[12px] text-[10px] font-bold text-center'>{title}</h2>
      <p className='text-center text-[#606060] font-roboto lg:text-[16px] md:text-[12px] sm:text-[10px] text-[8px]'>{para}</p>
    </div>
  )
}

export default FeatureBox
