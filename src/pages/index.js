import * as React from "react"
import './global.css'
import Main from "../components/Main"
import About from "../components/About"
import Colaborador from "../components/Colaboradores"
import Footer from "../components/Footer"
import Objectivos from "../components/Objectivos"



const IndexPage = () => {
  return (
     <>
     <Main/>
     <About/>
     <Objectivos/>
     <Colaborador/>
     <Footer/>
     </>
  )
}

export default IndexPage

