import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import Username from './components/auth/Username';
import Password from './components/auth/Password';
import Register from './components/auth/Register';
import Profile from './components/auth/Profile';
import Recovery from './components/auth/Recovery';
import Reset from './components/auth/Reset';
import PageNotFound from './components/PageNotFound';
import Dashboard from './components/Dashboard/Dashbord';


import Home from './components/home/pages/home';
import Footer from './components/home/pages/Footer/Footer';
import Header from './components/home/pages/Header/Header';
import LoadSpinner from './components/home/pages/LoadSpinner/LoadSpinner';
import MenuModal from './components/home/pages/MenuModal/MenuModal';
import { useState } from 'react';


/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <Username></Username>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path : '/recovery',
        element : <AuthorizeUser><Recovery></Recovery></AuthorizeUser>
    },
    {
        path : '/reset',
        element : <AuthorizeUser><Reset></Reset></AuthorizeUser>
    },
    {
        path : '/dashboard',
        element : <AuthorizeUser><Dashboard></Dashboard></AuthorizeUser>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
])


export default function App() {
    const [isLoading, setLoading] = useState(true);

  // timer for spinner
  setTimeout(() => {
    setLoading(false);
  }, 1500);
  return (
    <div>
      {isLoading && <LoadSpinner />}
      {!isLoading && (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      )}
      <MenuModal />
    </div>
  )
}