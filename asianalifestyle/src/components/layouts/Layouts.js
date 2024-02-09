import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet";
const Layouts = ({ children,title }) => {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
             
            </Helmet>
       <div>
      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </div>
    </div>
  )
}

export default Layouts
