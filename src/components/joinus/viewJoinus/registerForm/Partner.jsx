import React, { useContext } from 'react'
import { context } from '../../../context/MysmukContext'

function Partner({ setNext }) {
  const { setProgress } = useContext(context)
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  const handleBack = (e) => {
    e.preventDefault()
    setNext(2)
     setProgress((prev) => ({
    ...prev,
    documents: false
  }))
  }
 
  return (
    <div>
      <div className='w-full lg:h-[35vw] md:h-[45vw] sm:h-[65vw] overflow-y-scroll h-[80vw] flex mt-8 px-10'>
        <div className='w-full'>
          <h2 className='text-2xl font-bold mb-4'>Partner Contract</h2>
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
            <div className='flex gap-2  justify-end'>
              <button type='submit' className='bg-[#f41313] text-white px-4 py-2 rounded hover:bg-red-600 ' onClick={handleBack}>Back</button>
              <button type='submit' className='bg-[#f41313] text-white px-4 py-2 rounded hover:bg-red-600 '>Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Partner
