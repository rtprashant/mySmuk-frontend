import React from 'react'
import Header from './components/Header'
import MobileMenu from './components/MobileMenu'
import Hero from './components/landingpage/Hero'

function App() {
  return (
    <div className=' w-full bg-[#FFDBDB]'>
      <div>
        <div className="flex justify-center pt-5  ">
          <Header className="sm:block hidden " />
        </div>
        <div className='-mt-12'>
          <MobileMenu className="sm:hidden block bg-red-500" />
        </div>
      </div>
      <Hero/>
    </div>
  )
}

export default App
