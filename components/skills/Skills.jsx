import React from 'react'
import "./Skills.css" 
import problemSolver from "./problemsolver.jpg"
import design1 from "./webdevloper.png"

export default function Skills() {
  return (
    <div>
        <section id="skills"  > 
        <span className='skillTitle'   >What I do</span>
        <span className='skillDesc'  >I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of a design and a keen eye for detail. I am profficient in HTML , CSS , NODE.JS , REACT.JS,EXPRESS.JS , MONGODB,JAVASCRIPT , C ,C++ , JAVA & many more .</span>

        <div className="skillBars">
            <div className="skillsBar">
                <img src={design1} alt="Designing Website" className="skillbarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This shows about my minor domain in which i am specialised.</p>
                </div>
            </div>
            <div className="skillsBar">
                <img src={problemSolver} alt="Solving the problem" className="skillbarImg" />
                <div className="skillBarText">
                    <h2>Problem Solving</h2>
                    <p>Here You can text me in the mail for the problem solving skills</p>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}
