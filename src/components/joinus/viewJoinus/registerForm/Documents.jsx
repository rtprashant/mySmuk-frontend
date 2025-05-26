import React, { useContext } from 'react'
import { context } from '../../../context/MysmukContext'

function Documents({ setNext }) {
  const { setProgress } = useContext(context)
  const handleSubmit = (e) => {
    e.preventDefault()
    setProgress((prev) => ({
      ...prev,
      documents: true
    }))
    setNext(3)
  }
  const handleBack = (e) => {
    e.preventDefault()
    setNext(1)
    setProgress((prev) => ({
      ...prev,
      basicDetails: false
    }))
  }
  return (
    <div>
      <div className='w-full lg:h-[35vw] md:h-[45vw] sm:h-[65vw] overflow-y-scroll h-[80vw] flex mt-8 px-10'>
        <div className='w-full'>
          <h2 className='text-2xl font-bold mb-4'>Restaurant Document Details</h2>
          <div className='border '></div>
          <form className='mt-6 space-y-4' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>PAN no.</label>
              <input type='text' className='w-full p-2 border border-gray-300 rounded' placeholder='Enter PAN no' />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>PAN image</label>
              <input type='file' className='w-full p-2 border border-gray-300 rounded' placeholder='Choose file' />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>GST no.</label>
              <input type='text' className='w-full p-2 border border-gray-300 rounded' placeholder='GST no' />
            </div>
             <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>FSSAI no.</label>
              <input type='text' className='w-full p-2 border border-gray-300 rounded' placeholder='GST no' />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>FSSAI Exp Date</label>
              <input type='date' className='w-full p-2 border border-gray-300 rounded' placeholder='GST no' />
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

export default Documents
