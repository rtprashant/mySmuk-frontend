import React from 'react'
import ListingBox from './ListingBox'


function Listing() {
  return (
    <div className='w-full mt-10 '>
        <div className='flex justify-center'>
            <h1 className='text-[#787878] font-outfit text-[60px]'> Our Listing</h1>
        </div>
         
      <div className='flex flex-wrap mt-8 justify-center md:gap-10 sm:gap-10 gap-3 m-5 lg:gap-16'>
      <ListingBox className="flex-grow"/>
      <ListingBox className="flex-grow"/>
      <ListingBox className="flex-grow"/>
      <ListingBox className="flex-grow"/>
      <ListingBox className="flex-grow"/>
      </div>
    
    </div>
  )
}

export default Listing
