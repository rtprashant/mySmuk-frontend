// import React, { useState, useEffect, useRef } from 'react'
// import Header from './components/Header'
// import MobileMenu from './components/mobile/MobileMenu'
// import Hero from './components/landingpage/Hero'
// import Feature from './components/landingpage/Feature'
// import Listing from './components/landingpage/Listing'
// import Reviews from './components/landingpage/Reviews'
// import MobileApp from './components/landingpage/MobileApp'
// import Footer from './components/Footer'
// import Login from './components/auth/Login'
// import { RxCross2 } from "react-icons/rx";

// function App() {
//   const [signInPopUp, setSignInPopUp] = useState(false);
//   const currentRefMoblie = useRef(null)
//   const currentRef = useRef(null)
//   useEffect(() => {
//     const hidePopUp = (event) => {
//       console.log(currentRef.current);

//       if (currentRef.current && !currentRef.current.contains(event.target)) {
//         setSignInPopUp(false)
//       }
//     }
//     if (setSignInPopUp) {
//       document.addEventListener('mousedown', hidePopUp)

//     }

//     return () => {
//       document.removeEventListener('mousedown', hidePopUp)
//     }
//   }, [signInPopUp])

//   useEffect(() => {
//     console.log(`pop up ` + signInPopUp);

//     if (signInPopUp) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = 'auto'
//     }

//     return () => {
//       document.body.style.overflow = 'auto'
//     };
//   }, [signInPopUp]);
//   return (
//     <div className=' w-full bg-[#]'>
//       <div>
//         <div className="flex justify-center pt">
//           <Header setSignInPopUp={setSignInPopUp} className="sm:block hidden " />
//         </div>
//         <div className='-mt-12'>
//           <MobileMenu setSignInPopUp={setSignInPopUp} className="sm:hidden block  " />
//         </div>
//       </div>
//       <Hero />
//       <Feature />
//       <Listing />
//       <Reviews />
//       <MobileApp />
//       <Footer />
//       <div  >
//         {signInPopUp && (
//           <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/50 bg-opacity-50 z-50'>
//             <div className="relative bg-[#ECECEC] p-5 rounded-lg w-[60%] h-[90%] sm:block hidden " ref={currentRef}>
//               <button
//                 className="absolute top-2 right-2 text-xl text-black hover:cursor-pointer"
//                 onClick={() => setSignInPopUp(false)}
//               >
//                 <RxCross2 />
//               </button>
//               <div className='flex justify-center items-center h-full'>
//                 <Login />
//               </div>
//             </div>
//             <div className='sm:hidden block' ref={currentRef}>
//               <Login />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default App
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import MobileMenu from './components/mobile/MobileMenu';
import Hero from './components/landingpage/Hero';
import Feature from './components/landingpage/Feature';
import Listing from './components/landingpage/Listing';
import Reviews from './components/landingpage/Reviews';
import MobileApp from './components/landingpage/MobileApp';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import { RxCross2 } from "react-icons/rx";

function App() {
  const [signInPopUp, setSignInPopUp] = useState(false);
  const currentRef = useRef(null);
  const currentRefMobile = useRef(null);

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

  return (
    <div className='w-full'>
      <div>
        <div className="flex justify-center">
          <Header setSignInPopUp={setSignInPopUp} className="sm:block hidden" />
        </div>
        <div className='-mt-12'>
          <MobileMenu setSignInPopUp={setSignInPopUp} className="sm:hidden block" />
        </div>
      </div>
      <Hero />
      <Feature />
      <Listing />
      <Reviews />
      <MobileApp />
      <Footer />
      {signInPopUp && (
        <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/50 z-50'>
        
          <div className="relative bg-[#ECECEC] p-5 rounded-lg w-[60%] h-[90%] sm:block hidden" ref={currentRef}>
            <button
              className="absolute top-4 right-4 text-[40px] font-extrabold text-red-500 bg-white shadow-gray-500 shadow-lg hover:cursor-pointer  p-2 rounded-full"
              onClick={() => setSignInPopUp(false)}
            >
              <RxCross2 className='lg:size-10 md:size-8 sm:size-8 size-8 '/>
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
  );
}

export default App;


