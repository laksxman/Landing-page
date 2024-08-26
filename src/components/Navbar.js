import React from 'react'
import {useState} from 'react'
import './Navbar.css'
import logo from '../assets/wordpress-icon.png'
//import contactImg from '../assets/contact.png'
//import Menu from '../assets/menu.png'
import {Link} from 'react-scroll'

const  Navbar=()=> {
  const [showMenu , setShowMenu] =useState(false);
  return (
    <nav  className='navbar bg-gray-300 lg:px-64 w-full ' >
        <img src={logo} alt='Logo' className='logo'/>
        <span className='text '>WebCon</span>

        <div className='nav-links'>
                <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="nav-links-item" >Home</Link>
                <Link activeClass='active' to='service' spy={true} smooth={true} offset={-100} duration={500} className="nav-links-item" >Service</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="nav-links-item" >About</Link>
                <Link activeClass='active' to='product' spy={true} smooth={true} offset={-100} duration={500} className="nav-links-item" >Product</Link>
                <Link activeClass='active' to='testimonial' spy={true} smooth={true} offset={-100} duration={500} className="nav-links-item" >Testimonial</Link>

                {/* <img src ={contactImg} alt='Contact Me' className='btnImg'/>      */}

        </div>

        <div text-green-400 className='btns'>
        <button  className='btn1' onClick={() => {
        document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'})
        }}>Login</button>
        </div>

        <button className='btn' onClick={() => {
        document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
        }}>Sign-up</button>

        

        {/* <button className='btn2' onClick={() => {
        document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'})
        }}>Sign-up</button> */}
        

            {/* <img src={Menu} alt='menu' className='mobMenu' onClick= {() => setShowMenu(!showMenu)}/> */}

            <div className='navMenu' style={{display : showMenu? 'flex' : 'none'}}>
                <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="Menu-item" onClick={() => setShowMenu(false)} >Home</Link>
                <Link activeClass='active' to='service' spy={true} smooth={true} offset={-100} duration={500} className="Menu-item" onClick={() => setShowMenu(false)} >Service</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="Menu-item" onClick={() => setShowMenu(false)} >About</Link>
                <Link activeClass='active' to='Product' spy={true} smooth={true} offset={-100} duration={500} className="Menu-item" onClick={() => setShowMenu(false)} >Product</Link>
                <Link activeClass='active' to='testimonial' spy={true} smooth={true} offset={-100} duration={500} className="Menu-item" onClick={() => setShowMenu(false)} >Testimonial</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500} className="Menu-item" onClick={() => setShowMenu(false)} >Contact Us</Link>

          </div>
    
    
    </nav>
  )
}

export default Navbar
