import React from 'react'
import Bouquet from '../../assets/bouquet.png'
import mmm from '../../assets/mmm.png'
import { HeroSection } from '../../constant/LandingPage'
import { FaLocationDot } from "react-icons/fa6";
function Hero() {
  return (
    <div className='flex sm:justify-between justify-center sm:mt-0 mt-32  '>
      <div className='lg:mt-7 sm:-mt-4  md:mt-7  z-50 lg:w-fit lg:h-[619px]   sm:block hidden '>
        <img src={Bouquet} alt="" className='' />
      </div>
      <div className='flex justify-center items-center '>
        <div className='lg:w-[682px] lg:h-[323.21px] w-[300px] h-[223px] sm:ml md:ml-10'>
          <div>
            {
              HeroSection.map((itm) => (
                <div key={itm.id}>
                  {
                    itm.id == 1 && (
                      <div className=' flex flex-col justify-center  sm:mt-10 bg-red-  '>
                        <h1 className='w-full md:leading-[2rem] text-center  font-oswald font-semibold text-[24px]  md:text-[25px] lg:text-[60px] lg:leading-[4rem] text-black'>{itm.title}</h1>
                        <p className='font-roboto text-center text-[#5E5E5E] mt-5  w-[90%] self-center text-[10px] md:text-[14px] lg:text-[20px]'>{itm.para}</p>
                      </div>
                    )
                  }

                </div>
              ))

            }
            <div className='flex lg:ml-[130px] lg:mt-[50px] mt-10 relative'>
            <div className="absolute left-2 mt-7 md:left- lg:left transform -translate-y-1/2 ">
                  <FaLocationDot />
                </div>
              <select className=' w-[408px] h-[58.21px] rounded-xl  focus:outline-none focus:ring-2 focus:ring-[#646464]  shadow-inner pl-7'>
                

                <option value="1" className='bg-[#646464] left-10'> Enter Your Locality</option>

              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:mt-7 sm:-mt-4 lg:-mt sm:block hidden md:-mt-6 z-40 '>
        <img src={mmm} alt="" />
      </div>

    </div>
  )
}

export default Hero

