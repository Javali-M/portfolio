import "./Navbar.css";
import React,{useState} from 'react'
import {Link, link} from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa';
import img1 from '../assets/logo.png';
const Navbar = () => {
    const[click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
  return (
    <div className="header">
    <Link to="/">
    <img className='img1'src={img1}/>
    <h2>Javali Murari</h2>
    </Link>
    <ul className={click? "menu active":"menu"}>
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
        <li>
            <Link to='https://github.com/Javali-M'>Github</Link>
        </li>
        <li>
            <Link to='https://github.com/Javali-M'>Resume</Link>
        </li>
        <li>
            Resume
        </li>
    </ul>
    <div className="hamburger" onClick={handleClick}>
    {click? (
        <FaTimes size={20} style={{color:'white'}}/>
    ):(        <FaBars size={20} style={{color:'white'}}/>
    )}
    </div>
    </div>
  );
}

export default Navbar