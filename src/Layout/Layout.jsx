import React from 'react'
import Footer from '../core/Footer/Footer'
import Navbar from '../core/NavBar/Navbar'

const Layout = ({children}) => {
    return (
        <div>
        <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
