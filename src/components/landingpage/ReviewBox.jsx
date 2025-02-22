import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function ReviewBox() {
  return (
    <div className='w-[410px] h-[92px] bg-black p-3 flex gap-3 '>
        <div>
            <CgProfile className=' text-white size-[40px]'/>
        </div>
        <div>
            <p className='text-white text-[16px]'>Divyansh </p>
            <p className='text-white text-[14px] flex'>
                <IoStar className='text-yellow-500'/> 
                <IoStar className='text-yellow-500'/>
                <IoStar className='text-yellow-500'/>
                <IoStar className='text-yellow-500'/>
                <IoStar className='text-white'/>
            </p>
            <p className='text-white leading-[15px]'>Arrangement was very good . I like the services...</p>

        </div>
      
    </div>
  )
}

export default ReviewBox
