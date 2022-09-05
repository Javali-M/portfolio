import React from 'react'
import { Navbar } from 'react-bootstrap'
import Footer from '../components/Footer'
import Form from '../components/Form'
import img from '../assets/dk.jpeg';

const Contact = () => {
  return (
    <div>
     <Navbar/>
     <div className="mask">
        <img src={img} className="img" heading="contact me"></img>
      </div>
      <Form/>
    <Footer/>
    </div>
  )
}

export default Contact