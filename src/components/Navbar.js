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
    <div className="this">
    <img className='img1'src={img1}/>
    <h2 className="h2">Javali Murari</h2>
    </div>
    </Link>
    <ul className={click? "menu active":"menu"}>
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
        <li>
            <Link to='https://github.com/Javali-M'>Github</Link>
        </li>
        <li>
        <Link to='/resume'>Resume</Link>
        {/* <Link download={'../assets/resume.pdf'}> Resume </Link> */}
        {/* <a href="../assets/resume.pdf" download = "resume.pdf">Resume 
     </a>
     <Document file={resume}/> */}
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