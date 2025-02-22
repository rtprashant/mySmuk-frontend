// import React from 'react'
// import FeatureBox from './FeatureBox'
// import { HeroSection } from '../../constant/LandingPage'

// function Feature() {
//   return (
//     <div className='flex justify-center'>
//        {
//         HeroSection.map((itm)=>(
//             <div key={itm.id} className='flex md:gap-20 sm:gap-2 gap-2 relative'>
//                 {
//                     itm?.feature?.map((f)=>(
//                         <div key={f.fid} className='realtive'>
//                             <div className='flex-grow h-[127px]'>
//                             <FeatureBox title={f.title} para = {f.para} className="flex"/>
//                             </div>
//                         </div>

//                     ))
//                 }
//             </div>
//         ))
//        } 
     
//     </div>
//   )
// }

// export default Feature
import React from 'react'
import FeatureBox from './FeatureBox'
import { HeroSection } from '../../constant/LandingPage'

function Feature() {
  return (
    <div className='flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-10 mt-20  '>
      {HeroSection.map((itm) =>
        itm?.feature?.map((f) => (
          <FeatureBox key={f.fid} title={f.title} para={f.para} />
        ))
      )}
    </div>
  )
}

export default Feature


