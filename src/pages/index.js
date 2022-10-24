import * as React from "react"
import './global.css'
import Main from "../components/Main"
import About from "../components/About"
import Footer from "../components/Footer"
import Objectivos from "../components/Objectivos"
import Apresentadores from "../components/Apresentadores"



const IndexPage = () => {
  return (
     <>
     <Main/>
     <About/>
     <Objectivos/>
     <Apresentadores/>
     <Footer/>
     </>
  )
}

export default IndexPage

