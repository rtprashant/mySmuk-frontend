import React, { useState, useEffect } from 'react';
import { navBar } from '../constant/LandingPage';
import { useNavigate } from 'react-router-dom';
import { motion } from "motion/react"
import Login from './auth/Login';
function Header({setSignInPopUp}) {
    const navigate = useNavigate()
    const [scrollDirection, setScrollDirection] = useState("up");
    // const [signInPopUp, setSignInPopUp] = useState(false)

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            if (window.scrollY > lastScrollY) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", updateScrollDirection);
        return () => window.removeEventListener("scroll", updateScrollDirection);
    }, []);
    
    return (
        <div className='w-full'>
            <motion.div className='z-50 fixed w-full bg-r flex justify-center '
                initial={{ y: 0, opacity: 1 }}
                animate={{
                    opacity: scrollDirection === "down" ? 0 : 1,
                }}>
                <div className="flex sm:flex   h-[45px] md:w-[620px] md:h-[52px] lg:w-[1186px]   lg:h-[80px] sm:bg-[#] ">
                    {navBar.map((item, index) => (
                        <div key={index} className="flex items-center  ">
                            <motion.div className=''
                                initial={{ y: 0, opacity: 1 }}
                                animate={{
                                    y: scrollDirection === "down" ? -15 : 0,
                                    opacity: scrollDirection === "down" ? 0 : 1,
                                }}
                                transition={{ duration: 0.3 }}>
                                {/* Company Name Section */}
                                {item.id === 1 && (
                                    <div className='sm:block hidden'>
                                        <div className="flex sm:w-[163px] sm:h-[45px] lg:w-[300px] lg:h-[90px] md:w-[158px] md:h-[45px]   justify-center items-center">
                                            <h1 className='text-[#000000]  font-outfit lg:text-[64px] md:text-[36px] sm:text-[36px] font-semibold' >{item.comapnayFirstName}</h1>
                                            <h2 className='text-[#f41313]  font-outfit lg:text-[64px] md:text-[36px] sm:text-[36px] font-semibold'>{item.comapnayLastName}</h2>
                                        </div>
                                    </div>
                                )}
                            </motion.div>

                            <div className='flex gap-3'>
                                {/* Navigation Links Section */}
                                <motion.div className='sm:block hidden  '
                                    initial={{ y: 0, opacity: 1 }}
                                    animate={{
                                        y: scrollDirection === "down" ? -15 : 0,
                                        opacity: scrollDirection === "down" ? 0 : 1,
                                    }}>
                                    {item.id === 2 && (
                                        <div className="flex font-roboto lg:gap-10 md:gap-5 text-[#000000] lg:ml-52 md:ml-16">
                                            {item.content.map((i) => (
                                                <button className='lg:h-[51px] lg:w-[82px] lg:text-center flex items-center lg:text-[20px] hover:cursor-pointer'
                                                    onClick={() => {
                                                        navigate(`${i?.url}`)
                                                    }}>{i.title}</button>

                                            ))}
                                        </div>
                                    )}
                                </motion.div>

                                {/* Buttons Section */}
                                <div className='sm:block hidden  '>
                                    {item.id === 3 && (
                                        <motion.div className=" w-fit flex items-center gap-3 relative lg:mr-4 md:mr-4 overflow-hidden"
                                            initial={{ y: 0, opacity: 1 }}
                                            animate={{
                                                y: scrollDirection === "down" ? -15 : 0,
                                                opacity: scrollDirection === "down" ? 0 : 1,
                                            }}>

                                            {<div className='flex gap-2'>


                                                <button className="lg:w-[125px] lg:h-[41px] md:w-[57.85px] md:h-[51px] text-white bg-[#f41313] flex items-center justify-center rounded-lg lg:text-[24px] hover:cursor-pointer hover:bg-[#FF1717] font-outfit md:text-[14px] z-50"
                                                    onClick={() => {
                                                        navigate(`/join-us`)
                                                    }}>
                                                    {item.btn[0].title}
                                                </button>
                                                <button className="lg:w-[125px] lg:h-[41px] md:w-[57.85px] md:h-[51px] text-white bg-[#f41313] flex items-center justify-center rounded-lg lg:text-[24px] hover:cursor-pointer hover:bg-[#FF1717] font-outfit md:text-[14px] z-50"
                                                    onClick={() => {
                                                        setSignInPopUp(true)
                                                    }}>
                                                    {item.btn[1].title}
                                                </button>
                                            </div>
                                            }


                                        </motion.div>
                                    )}
                                </div>


                            </div>


                        </div>


                    ))}




                </div>




            </motion.div>
           
        </div>


    );
}

export default Header;
