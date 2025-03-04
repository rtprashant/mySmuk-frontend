
import React from 'react'
import FeatureBox from './FeatureBox'
import { HeroSection } from '../../constant/LandingPage'

function Feature() {
  return (
    <div className='flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 mt-20 p-1  '>
      {HeroSection.map((itm) =>
        itm?.feature?.map((f) => (
          <FeatureBox key={f.fid} title={f.title} para={f.para} />
        ))
      )}
    </div>
  )
}

export default Feature


