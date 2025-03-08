import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import JoinUs from './components/joinus/JoinUs.jsx'
import Login from './components/auth/Login.jsx'
import BookNow from './components/bookorder/BookNow.jsx'
import About from './components/about/About.jsx'
import Contactus from './components/contact/Contactus.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import Signup from './components/auth/Signup.jsx'
import { Toaster } from 'react-hot-toast';

const AppRouter = () => {
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
      path: '/book-now',
      element: <BookNow />

    },
    {
      path: '/about',
      element: <About />

    },
    {
      path: '/contact',
      element: <Contactus />

    },


  ])
  return <RouterProvider router={route} />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
      <Toaster />
      <AppRouter />
    </Provider>

  </StrictMode>,
)
