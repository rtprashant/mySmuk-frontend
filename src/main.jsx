import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import JoinUs from './components/joinus/JoinUs.jsx'
import Login from './components/auth/Login.jsx'

import About from './components/about/About.jsx'
import Contactus from './components/contact/Contactus.jsx'
import { store } from './redux/store.js'
import { Provider, useSelector } from 'react-redux'
import Signup from './components/auth/Signup.jsx'
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google'
import ShowBookRelatedRes from './components/bookorder/ShowBookRelatedRes.jsx'
import ErrorPage from './components/common/ErrorPage.jsx'
import Admin from './components/admin/Admin.jsx'
import PackagePage from './components/admin/packages/PackagePage.jsx'
import ListingPage from './components/admin/listing/ListingPage.jsx'
import AddListing from './components/admin/listing/AddListing.jsx'
import BookNow from './components/bookorder/BookNow.jsx'

const AppRouter = () => {
  const  loggedInUser  = JSON.parse(localStorage.getItem("loggedInUser"))
  const { user } = useSelector((state) => state.signIn);
  console.log(user?.userType ==='admin');
  
  
  const route = createBrowserRouter([
    {
      path: '/',
      element: <App />

    },
    {
      path: '/join-us',
      element: <JoinUs />

    },
    {
      path: '/auth/:userId',
      element: <App />

    },
    {
      path: '/book-now/:id',
      element: user || loggedInUser ? <BookNow/> : <div>login first</div>

    },
    {
      path: '/about',
      element: <About />

    },
    {
      path: '/contact',
      element: <Contactus />

    },
    {
      path: '/package/:id',
      element: <ShowBookRelatedRes/>

    },
    {
      path: '/admin',
      element: loggedInUser?.userType ==='admin' ? <Admin/> : <ErrorPage/>,

    },
    {
      path: '/admin/add-packages',
      element: loggedInUser?.userType ==='admin' ? <PackagePage/> : <ErrorPage/>,

    },
    {
      path: '/admin/add-listing',
      element: loggedInUser?.userType ==='admin' ? <ListingPage/> : <ErrorPage/>,

    },
    {
      path: '/admin/add-listing/:id',
      element: loggedInUser?.userType ==='admin' ? <AddListing/> : <ErrorPage/>,
    }


  ])
  return <RouterProvider router={route} />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Provider store={store}>
      <Toaster />
      <GoogleOAuthProvider clientId='1025749040549-vu4olhae365bgr5vfsnqhl30crp6spj1.apps.googleusercontent.com'>
        <AppRouter />
      </GoogleOAuthProvider>
    </Provider>

  </StrictMode>,
)
