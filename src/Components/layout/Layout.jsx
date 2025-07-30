import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div>
        <Navbar />
        {/*  */}
        <div style={{ paddingTop: "100px" }}>
             </div>
        <Outlet />

        <Footer />
        
        
    </div>
  )
}

export default Layout