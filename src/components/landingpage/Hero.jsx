import React from 'react'
import Bouquet from '../../assets/bouquet.png'
import mmm from '../../assets/mmm.png'
import { HeroSection } from '../../constant/LandingPage'
function Hero() {
  return (
    <div className='flex '>
      <div className='lg:-mt-14 '>
        <img src={Bouquet} alt="" />
        </div>
      <div className='flex justify-center items-center'>
        <div className='lg:w-[682px] lg:h-[323.21px]'>
<div>
{
    HeroSection.map((itm)=>(
        <div key={itm.id}>
            {
                itm.id ==1 &&(
                    <div className=' lg:-ml-5 flex flex-col justify-center '>
                        <h1 className='w-full leading-[4rem] text-center  font-outfit text-[62px] text-[#787878]'>{itm.title}</h1>
                        <p className='font-roboto text-center text-[#5E5E5E] mt-5  w-[90%] self-center '>{itm.para}</p>
                    </div>
                )
            }

        </div>
    ))
    
}
<div className='flex lg:ml-[110px] lg:mt-[50px]'>
    <select className='bg-white w-[408px] h-[58.21px] rounded-xl  focus:outline-none focus:ring-2 focus:ring-[#646464]  shadow-inner'>
        <option value="1" className='bg-[#646464] pl-5'>Enter Your Locality</option>
    </select>
</div> 
</div>
        </div>
      </div>
      <div className='lg:-mt-14  lg:ml-20'>
        <img src={mmm} alt="" />
      </div>

    </div>
  )
}

export default Hero
