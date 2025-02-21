import React from 'react';
import { navBar } from '../constant/LandingPage';

function Header() {
    return (
        <div className='   '>
            <div className="flex sm:flex   h-[45px] md:w-[620px] md:h-[52px] lg:w-[1186px]   lg:h-[80px] sm:bg-[#EDCCCC] sm:rounded-xl sm:shadow-sm">
                {navBar.map((item, index) => (
                    <div key={index} className="flex items-center  ">
                      <div className=''>
                          {/* Company Name Section */}
                          {item.id === 1 && (
                            <div className='sm:block hidden'>
                                <div className="flex sm:w-[163px] sm:h-[45px] lg:w-[300px] lg:h-[90px] md:w-[158px] md:h-[45px]   justify-center items-center">
                                    <h1 className='text-[#FFFFFF]  font-outfit lg:text-[64px] md:text-[36px] sm:text-[36px]' >{item.comapnayFirstName}</h1>
                                    <h2 className='text-[#FF5151] font-outfit lg:text-[64px] md:text-[36px] sm:text-[36px]'>{item.comapnayLastName}</h2>
                                </div>
                            </div>
                        )}
                      </div>

                        <div className='flex gap-3'>
                            {/* Navigation Links Section */}
                            <div className='sm:block hidden  '>
                                {item.id === 2 && (
                                    <div className="flex font-roboto lg:gap-10 md:gap-5 text-[#000000] lg:ml-52 md:ml-16">
                                        <button className='lg:h-[51px] lg:w-[82px] lg:text-center flex items-center lg:text-[20px] hover:cursor-pointer'>{item.home}</button>
                                        <button className='lg:h-[51px] lg:w-[82px] lg:text-center flex items-center lg:text-[20px] hover:cursor-pointer'>{item.about}</button>
                                        <button className='lg:h-[51px] lg:w-[82px] lg:text-center flex items-center lg:text-[20px] hover:cursor-pointer'>{item.conatct}</button>
                                    </div>
                                )}
                            </div>

                            {/* Buttons Section */}
                            <div className='sm:block hidden '>
                                {item.id === 3 && (
                                    <div className="flex items-center gap-2 lg:mr-4 md:mr-4">
                                        <button className="lg:w-[176px] lg:h-[41px] md:w-[92.7px] md:h-[51px] bg-[#FF5151] flex items-center justify-center text-white rounded-lg lg:text-[24px] hover:cursor-pointer font-outfit md:text-[14px]">
                                            {item.addRest}
                                        </button>
                                        <button className="lg:w-[110px] lg:h-[41px] md:w-[57.85px] md:h-[51px] text-white bg-[#FF5151] flex items-center justify-center rounded-lg lg:text-[24px] hover:cursor-pointer font-outfit md:text-[14px]">
                                            {item.signIn}
                                        </button>
                                    </div>
                                )}
                            </div>


                        </div>


                    </div>
                    

                ))}
              
             
              

            </div>
            
            

        </div>


    );
}

export default Header;
