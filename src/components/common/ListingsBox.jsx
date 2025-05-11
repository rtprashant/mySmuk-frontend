
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import Login from '../auth/Login'
import { useDispatch, useSelector } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';
import { logoutSuccess, otpverifeid } from '../../redux/feature/auth/signIn';

function ListingsBox({ id, RestName, packageName, startingFrom, img }) {
    const loggedInuser = JSON.parse(localStorage.getItem("loggedInUser"))
    const [signInPopUp, setSignInPopUp] = useState(false)
    const currentRef = useRef(null);
    const currentRefMobile = useRef(null);
    const { user } = useSelector((state) => state.signIn);
    const dispatch = useDispatch()
    const navigate = useNavigate()
     useEffect(() => {
        const hidePopUp = (event) => {
          if (
            (currentRef.current && !currentRef.current.contains(event.target)) 
          ) {
            setSignInPopUp(false);
          }
    
        };
    
        if (signInPopUp) {
          document.addEventListener('mousedown', hidePopUp);
        }
    
        return () => {
          document.removeEventListener('mousedown', hidePopUp);
        };
      }, [signInPopUp]);
    
      useEffect(() => {
        console.log(`pop up: ${signInPopUp}`);
        document.body.style.overflow = signInPopUp ? 'hidden' : 'auto';
    
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [signInPopUp]);
      useEffect(() => {
        if (user) {
          console.log(user);
    
          setSignInPopUp(false);
         
        
        }
      }, [user]);
      const handleClick = (pid) => {
        if (!loggedInuser) {
            setSignInPopUp(true)
        }else{
            navigate(`/book-now/${pid}`)
            console.log(pid);

        }
    }
    
   
    return (
        <div>
       
        <motion.div className='w-80 sm:w-[409px] h-full rounded-xl  relative '
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}>

            <div className='relative'>
                <img
                    src={img}
                    alt=""
                    className={`h-44 sm:h-[209px] w-full rounded-xl bg-gray-300 ${img ? "" : "animate-pulse"} object-cover`}
                />

                <div className='h-[39px] w-full -mt-4 absolute bg-black flex justify-center items-center'>
                    <h2 className='text-white font-outfit font-bold sm:text-[20px] flex justify-center items-center'>{RestName}</h2>
                </div>
            </div>


            <div className='bg-[#FF5151] mt-5 px-3 rounded-b-xl'>
                <div className='uppercase font-oswald font-bold'>
                    {packageName}
                </div>
                <div className='flex  justify-between mt-'>

                    <div className='flex flex-col'>
                        <h3 className='font-outfit font-semibold text-[12px] sm:text-[16px]'>Starting From :</h3>
                        <h1 className='font-outfit font-semibold text-[20px] sm:text-[40px]'> Rs {startingFrom}</h1>
                    </div>
                    <div>
                        <button
                            onClick={() => handleClick(id)}
                            className='bg-black  hover:cursor-pointer w-[107.12px] h-[43px] rounded-xl text-white mt-'>Book Now</button>
                    </div>
                </div>
            </div>

            
        </motion.div>
          {signInPopUp && (
            <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/50 z-50'>
    
              <div className="relative bg-[#ECECEC] p-5 rounded-lg w- h-44 " ref={currentRef}>
                <button
                  className="absolute top-4 right-4 text-[20px] font-extrabold text-red-500 bg-white shadow-gray-500 shadow-lg hover:cursor-pointer  p-2 rounded-full"
                  onClick={() => setSignInPopUp(false)}
                >
                  <RxCross2 className='lg:size- md:size- sm:size- size- ' />
                </button>
                <div className='flex justify-center items-center w-full h-full font-oswald '>
                  Login First To Access This Resource
                </div>
              </div>
    
              {/* <div className='sm:hidden block' ref={currentRefMobile}>
                <Login />
              </div> */}
            </div>
          )}
        </div>
       
    );
}

export default ListingsBox;
