import React, { useContext } from 'react'
import { context } from '../../../context/MysmukContext'

function BasicDetails({ setNext }) {
  const { setProgress } = useContext(context)
  const handleSubmit = (e) => {
    e.preventDefault()
    setProgress((prev) => ({
      ...prev,
      basicDetails: true
    }))
    setNext(2)

  }
  return (
    <div>
      <div className='w-full lg:h-[35vw] md:h-[45vw] sm:h-[65vw]  h-[80vw] flex mt-8 px-10 overflow-y-scroll '>
        <div className='w-full'>
          <h2 className='text-2xl font-bold mb-4'>Restaurant Basic Details</h2>
          <div className='border '></div>
          <form className='mt-6 space-y-4' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>Restaurant Name</label>
              <input type='text' className='w-full p-2 border border-gray-300 rounded' placeholder='Enter restaurant name' />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>Email</label>
              <input type='email' className='w-full p-2 border border-gray-300 rounded' placeholder='Enter email address' />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>Phone Number</label>
              <input type='tel' className='w-full p-2 border border-gray-300 rounded' placeholder='Enter phone number' />
            </div>
             <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>Address</label>
              <input type='text' className='w-full p-2 border border-gray-300 rounded' placeholder='Enter address' />
            </div>
             <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>Owner name</label>
              <input type='text' className='w-full p-2 border border-gray-300 rounded' placeholder='Owner name' />
            </div>
             <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>Owner email</label>
              <input type='email' className='w-full p-2 border border-gray-300 rounded' placeholder='Owner email' />
            </div>
             <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>Owner phone number</label>
              <input type='tel' className='w-full p-2 border border-gray-300 rounded' placeholder='Owner number' />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>Restaurant image</label>
              <input type='file' className='w-full p-2 border border-gray-300 rounded' placeholder='Upload image' />
            </div>
               <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>Food image</label>
              <input type='file' className='w-full p-2 border border-gray-300 rounded' placeholder='Upload image' />
            </div>

            <div className='flex gap-2  justify-end'>
              <button type='submit' className='bg-[#f41313] text-white px-4 py-2 rounded hover:bg-red-600 '>Next</button>
            </div>            
            </form>
        </div>
      </div>
    </div>
  )
}

export default BasicDetails
