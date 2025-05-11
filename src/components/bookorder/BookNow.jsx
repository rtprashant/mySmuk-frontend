import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import MobileMenu from '../mobile/MobileMenu'
import PackageDetails from './PackageDetails'

function BookNow() {
  const { id } = useParams()
  const [signInPopUp, setSignInPopUp] = useState(false);
  const [logout, setLogout] = useState(false)
  useEffect(() => {
    localStorage.getItem("loggedInUser")

  }, [])
  return (
    <div className='w-full'>
      <div className="flex justify-center">
        <Header setSignInPopUp={setSignInPopUp} className="sm:block hidden" />
      </div>
      <div className='-mt-12'>
        <MobileMenu setSignInPopUp={setSignInPopUp} setLogout={setLogout} className="sm:hidden block" />
      </div>
      <div className='mt-36 sm:mt-52'>
      <PackageDetails className=""/>
      </div>
   
      {/* <Footer /> */}
    </div>
  )
}

export default BookNow
