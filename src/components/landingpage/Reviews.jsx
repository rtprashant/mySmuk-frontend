import React from 'react'
import ReviewBox from './ReviewBox'

function Reviews() {
  return (
    <div className='w-full mt-20'>
        <div className='flex justify-center'>
            <h1 className='font-outfit text-[#787878] text-[64px]'>Our Reviews</h1>
        </div>
    <div className='flex flex-wrap gap-10 mt-10 justify-center'>
    <ReviewBox/>
    <ReviewBox/>
    <ReviewBox/>
    

    </div>
    </div>
  )
}

export default Reviews
