import React from "react";
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex flex-auto">
                <div className="grow">
                    <Navbar />
                    <div className="m-5">
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default Layout
