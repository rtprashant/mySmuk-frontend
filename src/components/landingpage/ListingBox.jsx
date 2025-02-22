// import React from 'react'

// function ListingBox() {
//   return (
//     <div className='w-[409px] h-[354px] rounded-xl bg-gray-500 realtive'>
//         <div className='realtive'>
//             <img src="" alt=""  className='h-[209px] w-full relative rounded-xl'
//             />
//             <div className='h-[39px]  -mt-5 absolute bg-black  flex justify-center items-center'>
//                 <h2 className='text-white font-outfit font-bold text-[20px] '>Barbeque Nation </h2>
//             </div>

//         </div>
//         <div className='bg-white mt-5 px-3 rounded-b-xl '>
//             <div className='flex justify-between'>
//                 <h3 className='font-outfit text-[14px] font-medium'>Greater Kalash Delhi</h3>
//                 <h3 className='font-outfit text-[14px] font-medium'>1.5 Km Away</h3>
//             </div>
//             <div className='flex justify-between mt-5'>
//                 <div className='flex flex-col'>
//                     <h3 className='font-outfit font-semibold '>Starting From :</h3>
//                     <h1 className='font-outfit font-semibold text-[40px]'> Rs 2500</h1>
//                 </div>
//                 <div>
//                     <button className='bg-[#FF5151] w-[107.12px] h-[43px] rounded-xl text-white mt-4'>Book Now</button>
//                 </div>
//             </div>

//         </div>
      
//     </div>
//   )
// }

// export default ListingBox
import React from 'react';

function ListingBox() {
  return (
    <div className='w-[409px] h-[354px] rounded-xl bg-gray-500 relative'>
        {/* Image Container */}
        <div className='relative'>
            <img 
                src="" 
                alt=""  
                className='h-[209px] w-full rounded-xl'
            />
           
            <div className='h-[39px] w-full -mt-4 absolute bg-black flex justify-center items-center'>
                <h2 className='text-white font-outfit font-bold text-[20px]'>Barbeque Nation</h2>
            </div>
        </div>

       
        <div className='bg-white mt-5 px-3 rounded-b-xl'>
            <div className='flex justify-between'>
                <h3 className='font-outfit text-[14px] font-medium'>Greater Kalash Delhi</h3>
                <h3 className='font-outfit text-[14px] font-medium'>1.5 Km Away</h3>
            </div>
            <div className='flex justify-between mt-5'>
                <div className='flex flex-col'>
                    <h3 className='font-outfit font-semibold'>Starting From :</h3>
                    <h1 className='font-outfit font-semibold text-[40px]'> Rs 2500</h1>
                </div>
                <div>
                    <button className='bg-[#FF5151] w-[107.12px] h-[43px] rounded-xl text-white mt-4'>Book Now</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ListingBox;
