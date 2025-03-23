import React from 'react'

function ListingSkelton() {
  return (
    <div className='flex flex-wrap justify-evenly  gap-5'>
    <div className='w-[300px] sm:w-[409px] h-60 bg-gray-300 flex-grow animate-pulse rounded-xl  relative '></div>
    <div className='w-[300px] sm:w-[409px] h-60 bg-gray-300 flex-grow  animate-pulse rounded-xl  relative '></div>
    <div className='w-[300px] sm:w-[409px] h-60 bg-gray-300 flex-grow  animate-pulse rounded-xl  relative '></div>
    </div>
    
  )
}

export default ListingSkelton
