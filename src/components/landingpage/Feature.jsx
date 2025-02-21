import React from 'react'
import FeatureBox from './FeatureBox'
import { HeroSection } from '../../constant/LandingPage'

function Feature() {
  return (
    <div className='flex justify-center'>
       {
        HeroSection.map((itm)=>(
            <div key={itm.id} className='flex gap-32'>
                {
                    itm?.feature?.map((f)=>(
                        <div key={f.fid} className=''>
                            <div className=''>
                            <FeatureBox title={f.title} para = {f.para} className="flex"/>
                            </div>
                        </div>

                    ))
                }
            </div>
        ))
       } 
     
    </div>
  )
}

export default Feature
