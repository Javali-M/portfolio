import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'
import img from '../assets/dk.jpeg';
import "../components/Hero2.css";
const Contact = () => {
  return (
    <div className='hero2'>
     <Navbar/>
     <div className="mask">
      <img src={img} className="img" heading="contact me">
      </img>
      </div>
    <div className='heading'>
    <h1 className='heroh1'>CONTACT</h1>
    <p className='herop'>Let's have a chat.</p>
    
    </div>
    {/* </div> */}
    <Footer/>
    </div>
  );
};

export default Contact