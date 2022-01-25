import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "normalize.css"
import "../assets/css/main.css"

export const Layout = props => {
  console.log(props)
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}
export default Layout
