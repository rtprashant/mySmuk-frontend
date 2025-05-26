import React, { useEffect, useRef, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import JoinusMain from './viewJoinus/JoinusMain'
import MobileMenu from '../mobile/MobileMenu'
import { useDispatch, useSelector } from 'react-redux'
import { RxCross2 } from 'react-icons/rx'
import Login from '../auth/Login'
import MysmukContext from '../context/MysmukContext'

function JoinUs() {
  const [signInPopUp, setSignInPopUp] = useState(false);
  const [logout, setLogout] = useState(false)
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
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const expiryTime = JSON.parse(localStorage.getItem("expiryTime"));
    console.log(typeof expiryTime);

    console.log(`expiry time ${expiryTime}`);
    console.log(storedUser);


    if (storedUser) {
      const currentTime = new Date().getTime();
      console.log(`expiry timee ${storedUser.expiryTime}`);

      console.log(`current time ${currentTime}`);
      console.log(`is current time grater thn expiry time ${currentTime >= storedUser.expiryTime}`);


      if (currentTime >= expiryTime) {
        alert(`token expiry`)
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("expiryTime");
        dispatch(logoutSuccess());
      } else {
        dispatch(otpverifeid(storedUser));
      }
    }
  }, []);

  setTimeout(() => {
    console.log('logout start');

  }, [JSON.parse(localStorage.getItem("expiryTime"))])
  return (
    <MysmukContext>
      <div>
        <div className="flex justify-center">
          <Header setSignInPopUp={setSignInPopUp} className="sm:block hidden" />
        </div>
        <div className='-mt-12'>
          <MobileMenu setSignInPopUp={setSignInPopUp} setLogout={setLogout} className="sm:hidden block" />
        </div>
      </div>
      <div>
        <JoinusMain />
      </div>
      <Footer />
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
   </MysmukContext>
  )
}

export default JoinUs
