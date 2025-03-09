import React, { useEffect, useState } from 'react'
import { navBar } from '../../constant/LandingPage'
import { IoReorderThree } from "react-icons/io5";
import MobileMenuSideBar from './MobileMenuSideBar';
import { useDispatch, useSelector } from 'react-redux';
import { openMenu } from '../../redux/feature/MobileMenu/MobileMenu';
function MobileMenu({setSignInPopUp , setLogout}) {
    
    const { sideBar } = useSelector(state=>state.menu)
    const dispatch = useDispatch()
    const handleSideBarClick = () => {
        dispatch(openMenu()) 
    }

    useEffect(() => {
        if (sideBar) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        };
    }, [sideBar]);

    return (
        <div>
            <div className="sm:hidden block z-50  mt-12 fixed w-full bg-white">
                {navBar.map((item) => (
                    <div key={item.id}>
                        {item.id === 1 && (
                            <div className="flex   p-2">
                                <div className="flex w-[163px] h-[45px] ml-2  items-center">
                                    <h1 className="text-[] font-outfit text-[36px] font-bold ">
                                        {item.comapnayFirstName}
                                    </h1>
                                    <h2 className="text-[#f41313] font-outfit text-[36px] font-bold">
                                        {item.comapnayLastName}
                                    </h2>
                                </div>
                                <div className="flex  ml-auto">
                                    <IoReorderThree className="size-[50px]" onClick={handleSideBarClick} />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {
                sideBar && (
                    <div className='w-full'>
                        <MobileMenuSideBar setSignInPopUp={setSignInPopUp} setLogout={setLogout}/>
                    </div>
                )
            }

        </div>
    )
}

export default MobileMenu
