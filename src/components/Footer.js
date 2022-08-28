import React from 'react'
import { icons } from 'react-icons';
import "./Footer.css";
import {FaPhone,FaMailBulk} from 'react-icons/fa';
import {AiFillLinkedin} from 'react-icons/ai';
const Footer = () => {
  return (
    <div className='footer'>
    <div className='container'>
    <div className='phone'>
    <h4>
    <FaPhone size={20} style={{color:'white', marginRight:'2rem'}}/>
    +91 7382341700</h4>
    </div>
    <div className='link'>
    <h4>
    <AiFillLinkedin size={20}
        style={{color:'white',marginRight:'2rem'}}/>
        linkedin.com/in/javali-murari/</h4>
    </div>
    <div className='email'>
        <h4><FaMailBulk size={20}
        style={{color:'white',marginRight:'2rem'}}/>
        javalimurari@gmail.com
        </h4>
    </div>

    </div></div>
  )
}

export default Footer