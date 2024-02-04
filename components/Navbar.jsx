import React from 'react'
import "./Navbar.css" 
import logo from './portfolio icon.jpg'
import mssg from "./mssg.webp"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function Navbar() {

  const[showMenu , setShowMenu] = useState(false) ; 
  let navigate = useNavigate() ; 
  const backToContact = ()=>
  {
    navigate("/contact") ; 
  }
  return (
    <nav className='navbar'  >
        <img src={logo} alt=""  className='logo'  />
        <div className='desktopMenu' >
            <h4  ><Link className='desktopMenuListItem' to="/"    >Home </Link></h4>
            <h4  ><Link className='desktopMenuListItem' to="/about" >About  </Link></h4>
            <h4><Link className='desktopMenuListItem' to="/skills" >Skills</Link></h4>
            <h4><Link className='desktopMenuListItem'  to="/project" >Projects</Link></h4>

        </div>
        <button className='desktopMenubtn' onClick={backToContact} >
            <img src={mssg} alt=""  className='desktopMenuImg'   /> Contact Me
        </button>
        <i className="fa-solid fa-bars "  onClick={()=>setShowMenu(!showMenu)} id="bar"   ></i>
        <div className='navMenu' style={{display : showMenu ? 'flex' :'none'}}  >
            <Link className='listItem' to="/"  onClick={()=>setShowMenu(false)}    >Home    </Link>
            <Link className='listItem' to="/about"  onClick={()=>setShowMenu(false)}  >About</Link>
            <Link className='listItem'  onClick={()=>setShowMenu(false)}  to="/skills"   > Skills</Link>
            <Link className='listItem' onClick={()=>setShowMenu(false)} to="/project"   >Projects</Link>
            <Link className='listItem' onClick={()=>setShowMenu(false)} to="/contact"  >Contact Me</Link>
            </div>
    </nav>
  )
}
