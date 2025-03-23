import React, { useEffect, useRef, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Login from '../auth/Login'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useParams } from 'react-router-dom'
import MobileMenu from '../mobile/MobileMenu'
import AdminWorks from './AdminWorks'

function Admin() {
    const [signInPopUp, setSignInPopUp] = useState(false);
    const [logout, setLogout] = useState(false)
    const { id } = useParams()
    const currentRef = useRef(null);
    const currentRefMobile = useRef(null);
    const { user } = useSelector((state) => state.signIn);
    const dispatch = useDispatch()
     useEffect(() => {
        const hidePopUp = (event) => {
          if (
            (currentRef.current && !currentRef.current.contains(event.target)) &&
            (currentRefMobile.current && !currentRefMobile.current.contains(event.target))
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
  return (
    <div className='w-full'>
        <div className="flex justify-center bg-yellow-200">
          <Header setSignInPopUp={setSignInPopUp} className="sm:block hidden" />
        </div>
        <div className='-mt-12'>
          <MobileMenu setSignInPopUp={setSignInPopUp} setLogout={setLogout} className="sm:hidden block" />
        </div>
        <div className='flex flex-wrap mt-44 justify-center md:gap-10 sm:gap-10 gap-3 m-5 lg:gap-16 '>
        {id}
      </div>
      <div>
      <AdminWorks/>
      <Outlet/>
      </div>
      <div className='bg-yellow-50'>
      <Footer className=""/>
      </div>
        
        {signInPopUp && (
        <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/50 z-50'>

          <div className="relative bg-[#ECECEC] p-5 rounded-lg w-[60%] h-[93%] sm:block hidden" ref={currentRef}>
            <button
              className="absolute top-4 right-4 text-[40px] font-extrabold text-red-500 bg-white shadow-gray-500 shadow-lg hover:cursor-pointer  p-2 rounded-full"
              onClick={() => setSignInPopUp(false)}
            >
              <RxCross2 className='lg:size-10 md:size-8 sm:size-8 size-8 ' />
            </button>
            <div className='flex justify-center items-center h-full'>
              <Login />
            </div>
          </div>

          <div className='sm:hidden block' ref={currentRefMobile}>
            <Login />
          </div>
        </div>
      )}
    </div>
  )
}

export default Admin
