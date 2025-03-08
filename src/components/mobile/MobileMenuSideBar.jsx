import React, { useEffect, useRef, useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { navBar } from '../../constant/LandingPage';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../../redux/feature/MobileMenu/MobileMenu';

function MobileMenuSideBar({ setSignInPopUp }) {
  const { sideBar } = useSelector(state => state.menu)
  const dispatch = useDispatch()
  const currentRef = useRef()
  const [name, setName] = useState('')
  const [user, setUser] = useState(false)
  useEffect(() => {
    const handleName = () => {
      const name = localStorage.getItem('loggedInUser')
      if (name) {
        const { firstName } = JSON.parse(name)
        if (!firstName) {
          console.error("No user found in localStorage");
          return;
        } else {
          const name = firstName.charAt(0)
          setName(name)
          setUser(true)
        }

      }

    }
    handleName()
  }, [user, name, localStorage.getItem('loggedInUser')])
  const handleClick = () => {
    dispatch(closeMenu())
  }
  useEffect(() => {
    const clickoutside = (event) => {
      if (!currentRef.current.contains(event.target)) {
        dispatch(closeMenu())
      }

    }
    window.addEventListener("mousedown", clickoutside)
    return () => {
      window.removeEventListener("mousedown", clickoutside)
    }

  })
  return (
    <div className="w-full z-50 fixed inset-0 flex justify-end bg-black/50">
      {/* Sidebar Container */}
      <div className="w-[60%] bg-white text-black flex flex-col h-screen fixed right-0 top-0 p-5 pt-20 overflow-y-auto"
        ref={currentRef}>
        {/* Close Button */}
        <div className="absolute top-4 right-4 cursor-pointer">
          <RxCross1 className="text-black p-2 h-10 w-10 rounded-full" onClick={handleClick} />
        </div>
        {
          user ? (
            <div className='w-full  flex justify-center'>
              <div className='h-12 w-12 text-white bg-[#f41313] rounded-full flex items-center justify-center ml-3 font-semibold cursor-pointer text-[35px]'>
                {name}
              </div>
            </div>
          ) : (
            <div></div>

          )
        }
        {/* Navigation Content */}
        <div className="text-black mt-4">

          {navBar.map((item, index) => (
            <div key={index}>
              {item?.content?.map((i) => (
                <NavLink
                  to={i.url}
                  key={i.fid}
                  className={({ isActive }) =>
                    `flex font-oswald p-2 rounded-2xl transition duration-300 ${isActive ? 'bg-[#FF1C1C] text-white' : 'bg-white text-black'
                    }`
                  }
                >
                  {i.title}
                </NavLink>
              ))}
            </div>
          ))}
          <div className='w-full '>
            <p className='flex font-oswald p-2 rounded-2xl transition duration-300 hover:cursor-pointer'>{navBar[2].btn[0].title}</p>
            {
              user ? <div></div> : (
                <p className='flex font-oswald p-2 rounded-2xl transition duration-300 hover:cursor-pointer'
                  onClick={() => {
                    dispatch(closeMenu())
                    setSignInPopUp(true)
                  }
                  }>{navBar[2]?.btn[1].title}</p>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenuSideBar;
