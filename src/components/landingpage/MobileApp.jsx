// import React from 'react'
// import phone from "../../assets/phone.png"
// import playstore from '../../assets/playstore.png'
// import appStore from '../../assets/appstore.png'
// function MobileApp() {
//   return (
//     <div className='w-full flex justify-center mt-20'>
//       <div className='w-[80%] flex'>
//         <div className='w-[50%] flex justify-center' >
//           <img src={phone} alt="" className='sm:block hidden'/>
//         </div>
//         <div className='w-[50%]'>
//           <div className='w-[560px] h-[60px] flex justify-center'>
//             <h2 className='text-[#787878] font-outfit text-[48px]'>Get The MySmuck App</h2>
//           </div>
//           <div className=' flex flex-col items-center mt-10'>
//             <p className='text-[#787878] font-outfit text-[20px]'>Scan to Download</p>
//             <div>
//               <img src="hg" className='h-44 w-40'/>
//             </div>
//           </div>
//           <div className='flex flex-col gap-5 ml-5 mt-5'>
//             <h1 className='text-[#787878] font-outfit text-[32px]'> Download App From</h1>
//             <div className='flex gap-2 -mt-5 '>
//               <img src={playstore} alt=""  className='bg-[#] rounded-lg'/>
//               <img src={appStore} alt="" className='bg rounded-lg' />
//             </div>
//           </div>
//         </div>

//       </div>

//     </div>
//   )
// }

// export default MobileApp
import React from 'react';
import phone from '../../assets/phone.png';
import playstore from '../../assets/playstore.png';
import appStore from '../../assets/appstore.png';

function MobileApp() {
  return (
    <div className='w-full flex justify-center mt-20 '>
      <div className='w-[80%] flex flex-col sm:flex-row items-center'>
        {/* Phone Image - Hidden on Mobile, Visible on Tablet and Desktop */}
        <div className='w-full sm:w-[50%] flex justify-center'>
          <img
            src={phone}
            alt="Phone"
            className='hidden sm:block max-w-full h-auto' // Hide on mobile, show on tablet and desktop
          />
        </div>

        {/* Right Section */}
        <div className='w-full sm:w-[50%] flex flex-col items-center sm:items-start relative'>
          {/* Heading */}
          <div className="w-full md:w-[363px] md:h-[45px] lg:w-[560px] lg:h-[60px] flex justify-center ">
            <h2 className="text-[#787878] font-outfit text-[24px] sm:text-[36px] md:text-[48px] text-center">
              Get The MySmuk App
            </h2>
          </div>


          {/* Scan to Download Section */}
          <div className='flex flex-col items-center  mt-5 lg:mt-10 md:mt-28 sm:ml-20 lg:ml-52 md:ml-28'>
            <p className='text-[#787878] font-outfit md:w-[158px] md:h-[25px]  sm:w-[200px] sm:h-[15px] sm:text-[18px]'>
              Scan to Download
            </p>
            <div className='mt-4'>
              <img src="hg" alt="QR Code" className='h-44 w-40 bg-black' />
            </div>
          </div>

          {/* Download App Section */}
          <div className='flex flex-col gap-5 mt-5 '>
            <h1 className="text-[#787878] font-outfit text-[24px]  text-center">
              Download App From
            </h1>
            <div className="flex gap-5 justify-center  sm:w-[350px] lg:w-[525px] md:w-[350px]  mx-auto">
              <img src={playstore} alt="Play Store" className="lg:w-[200px] md:w-[151px] sm:w-[151px] w-[151px] h-auto rounded-lg" />
              <img src={appStore} alt="App Store" className="lg:w-[200px] md:w-[151px] sm:w-[151px] w-[151px] h-auto rounded-lg" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;