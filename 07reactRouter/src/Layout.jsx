import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


function Layout(){   // outlet : It keeps the header and footer as it is and changes the outlet
    return ( 
        <>  
        <Header />   
        <Outlet />      
        <Footer />
        </>
    )
}
export default Layout