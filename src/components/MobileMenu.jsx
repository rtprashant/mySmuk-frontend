import React from 'react'
import { navBar } from '../constant/LandingPage'
import { IoReorderThree } from "react-icons/io5";
function MobileMenu() {
  return (
    <div>
        <div className="sm:hidden block z-50 ">
                {navBar.map((item) => (
                    <div key={item.id}>
                        {item.id === 1 && (
                            <div className="flex  w-full p-2">
                                <div className="flex w-[163px] h-[45px] ml-2  items-center">
                                    <h1 className="text-[#FFFFFF] font-outfit text-[36px]">
                                        {item.comapnayFirstName}
                                    </h1>
                                    <h2 className="text-[#FF5151] font-outfit text-[36px]">
                                        {item.comapnayLastName}
                                    </h2>
                                </div>
                                <div className="flex  ml-auto">
                                    <IoReorderThree className="size-[50px]" />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
      
    </div>
  )
}

export default MobileMenu
