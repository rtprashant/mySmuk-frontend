import React from 'react'

function FeatureBox({title , para}) {
  return (
    <div className='w-[301px] h-[127px] bg-[#FFC7C7] flex flex-col gap-2 justify-center items-center rounded-2xl shadow-xl'>
        <h2 className='text-[20px] '>{title}</h2>
        <p className='text-center text-[#606060] font-roboto  w-[90%]'>{para}</p>
    </div>
  )
}

export default FeatureBox
