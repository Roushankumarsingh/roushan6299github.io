import React from 'react'
import "./intro.css" 
import bg from "./portfolio.jpg" 
import { Link } from 'react-router-dom'
import Hire from "./hireme.webp"
import cv from "./cv.jpg" 


export default function intro() {
  return (
    <div>
        <section id="intro"  >
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className='introText' >I'm <span className="introName"><span>Roushan Kumar Singh</span></span><br/> <p>Web Devloper</p> </span>

                <p className="introPara">I am a skilled web devloper with experience in creating<br/> visually appealing and user friendly websites</p>
                <Link><button className='btn'  > <img  src={Hire} alt="Hire me Image" className='hire' />  Hire Me</button></Link>


            </div>
            <img src={cv} alt="Profile" className='bg' />

        </section>
    </div>
  )
}
