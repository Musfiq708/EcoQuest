import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { Bounce, ToastContainer } from 'react-toastify'

export default function MainLayout() {
  return (
    <div className=''>
      <NavBar></NavBar>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
