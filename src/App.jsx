import React from 'react'
import Header from './components/Header'
import MobileMenu from './components/MobileMenu'
import Hero from './components/landingpage/Hero'
import Feature from './components/landingpage/Feature'
import Listing from './components/landingpage/Listing'
import Reviews from './components/landingpage/Reviews'
import MobileApp from './components/landingpage/MobileApp'
import Footer from './components/Footer'

function App() {
  return (
    <div className=' w-full bg-[#FFDBDB]'>
      <div>
        <div className="flex justify-center pt-5">
          <Header className="sm:block hidden " />
        </div>
        <div className='-mt-12'>
          <MobileMenu className="sm:hidden block " />
        </div>
      </div>
      <Hero/>
      <Feature/>
      <Listing/>
      <Reviews/>
      <MobileApp/>
      <Footer/>
    </div>
  )
}

export default App
