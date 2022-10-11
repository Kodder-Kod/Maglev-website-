import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import Exp from './components/experience/Exp.jsx'
import Service from './components/services/Service.jsx'
import Contact from './components/contact/Contact.jsx'
import Port from './components/port/Port.jsx'
import Footer from './components/footer/Footer.jsx'
import About from './components/about/About.jsx'



const app = () => {
  return (
    <div> 
        <Nav/>
        <Header/>
        <Service/>
        <About/>
        <Port/>
        <Exp/>
        <Contact/>
        <Footer/>

    </div>
  )
}

export default app