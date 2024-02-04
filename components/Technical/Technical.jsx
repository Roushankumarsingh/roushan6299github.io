import React from 'react'
import "./Technical.css" 
import Navbar from '../Navbar'
import cs from "./c++img.webp" 
import c from "./cimg.jpg" 
import expressjs from "./expressjs.png"
import ex from "./ex.png"
import mongodb from "./mongodb.png" 
import react from "./reactjs.png"
import sequal from "./sequal.png" 
import nodejs from "./node.jsimg.png" 
import dsa from "./dsa.jpg" 
import dsa1 from "./dsa1.png" 
import css from "./css.jpg" 
import HTML from "./html.png" 
import js from "./js.png"
import Footer from '../Contact/Footer/Footer'
import java from "./java.jpg" ; 



export default function Technical() {
  return (
    <>
        <Navbar />
        <div className='skilled'  >
            <h1>Technical Skills</h1>
            <div   className='languages'    >
            <div className='languageid'>
                <img src={HTML} className="language" />
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <div className='languageid'>
                <img src={css} className="language" />
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <div className='languageid'  >
                <img src={cs} className="language" />
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half"></i>
            </div>
            <div className='languageid'>
                <img src={nodejs} className="language" />
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half"></i>
            </div>
            <div className='languageid'>
                <img src={js} className="language" />
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half"></i>
            </div>
            <div className='languageid'>
                <img src={react} className="language" />
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half"></i>
            </div>
            <div className='languageid'>
                <img src={dsa1} className="language" />
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div><div className='languageid'>
                <img src={ex} className="language" />
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <div  className='languageid' >   
                <img src={c} className="language" />
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half"></i>
            </div>
            
            <div className='languageid'  >
                <img src={mongodb} className="language" />
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half"></i>
            </div>
            <div className='languageid'>
                <img src={java} className="language" />
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            
          
            <div className='languageid'>
                <img src={sequal} className="language" />
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div > 
           
          
           
           
            </div>
            <div className='text-area'  >
            <h3>Core Skills & Non-Technical Skills</h3>
            <h4>Communication:</h4>
            <ul>
                <li>Verbal and written communication </li>
<li>Public speaking and presentation</li>
<li>Interpersonal skills</li>
            </ul>
            <h4>
            Problem Solving:
            </h4>
            <ul>
                <li>Analytical thinking</li>
                <li>Critical reasoning</li>
                <li>Decision-making</li>
            </ul>
            <h4>
            Teamwork:
            </h4>
            <ul>
                <li>Collaboration</li>
                <li>Team leadership</li>
                <li>Conflict resolution</li>
            </ul>
            <h4>
            Adaptability:
            </h4>
            <ul>
                <li>Flexibility</li>
                <li>Ability to learn quickly</li>
                <li>Openness to change</li>
            </ul>
            <h4>
            Organizational:
            </h4>
            <ul>
                <li>Time management</li>
                <li>Prioritization</li>
                <li>Detail-oriented</li>
            </ul>
        </div>
        </div>
        <Footer />
    </>
  )
}
