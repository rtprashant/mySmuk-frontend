import React from 'react'
import Bouquet from '../../assets/bouquet.png'
import mmm from '../../assets/mmm.png'
import { HeroSection } from '../../constant/LandingPage'
function Hero() {
  return (
    <div className='flex sm:justify-between justify-center  '>
      <div className='lg:-mt-14 sm:-mt-4 md:-mt-6 bg-red-0 lg:w-fit lg:h-[619px] -ml- -mt- sm:block hidden'>
        <img src={Bouquet} alt="" className=''/>
      </div>
      <div className='flex justify-center items-center '>
        <div className='lg:w-[682px] lg:h-[323.21px] w-[300px] h-[223px] '>
          <div>
            {
              HeroSection.map((itm) => (
                <div key={itm.id}>
                  {
                    itm.id == 1 && (
                      <div className=' flex flex-col justify-center '>
                        <h1 className='w-full md:leading-[2rem] text-center  font-outfit text-[24px]  md:text-[25px] lg:text-[60px] lg:leading-[4rem] text-[#787878]'>{itm.title}</h1>
                        <p className='font-roboto text-center text-[#5E5E5E] mt-5  w-[90%] self-center text-[10px] md:text-[14px] lg:text-[20px]'>{itm.para}</p>
                      </div>
                    )
                  }

                </div>
              ))

            }
            <div className='flex lg:ml-[130px] lg:mt-[50px] mt-10'>
              <select className='bg-white w-[408px] h-[58.21px] rounded-xl  focus:outline-none focus:ring-2 focus:ring-[#646464]  shadow-inner'>
                <option value="1" className='bg-[#646464] pl-7'>Enter Your Locality</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:-mt-14 sm:-mt-4 lg: sm:block hidden md:-mt-6'>
        <img src={mmm} alt="" />
      </div>

    </div>
  )
}

export default Hero

