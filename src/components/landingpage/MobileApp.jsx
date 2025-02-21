import React from 'react'
import phone from "../../assets/phone.png"
import playstore from '../../assets/playstore.png'
import appStore from '../../assets/appstore.png'
function MobileApp() {
  return (
    <div className='w-full flex justify-center mt-20'>
      <div className='w-[80%] flex'>
        <div className='w-[50%] flex justify-center' >
          <img src={phone} alt="" />
        </div>
        <div className='w-[50%]'>
          <div className='w-[560px] h-[60px] flex justify-center'>
            <h2 className='text-[#787878] font-outfit text-[48px]'>Get The MySmuck App</h2>
          </div>
          <div className=' flex flex-col items-center mt-10'>
            <p className='text-[#787878] font-outfit text-[20px]'>Scan to Download</p>
            <div>
              <img src="hg" className='h-44 w-40'/>
            </div>
          </div>
          <div className='flex flex-col gap-5 items-center mt-5'>
            <h1 className='text-[#787878] font-outfit text-[32px]'> Download App From</h1>
            <div className='flex gap-2 '>
              <img src={playstore} alt=""  className='bg-[#D9D9D9] rounded-lg'/>
              <img src={appStore} alt="" className='bg-[#D9D9D9] rounded-lg' />
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default MobileApp
