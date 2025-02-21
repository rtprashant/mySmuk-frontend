import React from 'react'
import ListingBox from './ListingBox'

function Listing() {
  return (
    <div className='w-full mt-32 '>
        <div className='flex justify-center'>
            <h1 className='text-[#787878] font-outfit text-[60px]'> Our Listing</h1>
        </div>
      <div className='flex flex-wrap mt-14 justify-center gap-16'>
      <ListingBox className="flex-grow"/>
      <ListingBox className="flex-grow"/>
      <ListingBox className="flex-grow"/>
      <ListingBox className="flex-grow"/>
      <ListingBox className="flex-grow"/>
      </div>
      <div className='flex justify-center'>
        <button className='h-[64px] w-[190px] text-white bg-[#FF5151] font-outfit text-[20px] rounded-xl mt-10'>More Result...</button>
      </div>
    </div>
  )
}

export default Listing
