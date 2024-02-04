import React from 'react'
import "./Contact.css"
import instagram from "./instagram.webp"
import linkedin from "./linkedin.png"
import github from "./github.png"
import emailjs from '@emailjs/browser';
import { useRef } from 'react'

export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_ssapfm3", 'template_gbfxz6h', form.current, 'UMSqFgpszRH_deRMw')
            .then((result) => {
                console.log(result.text);
                alert("Email sent") ; 
                e.target.reset() ; 
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">
                    All about My Social Media
                </h1>
                <p className="clientDesc">
                    I have some social media platform like instagram , linkedin and github .
                </p>
                <div className="clientImgs">
                    <a href=" https://www.instagram.com/_roushan__rajput_/"  ><img src={instagram} alt="Instagram Page" className="clientImg" /></a>
                    <a href=" https://www.linkedin.com/in/roushan-kumar-singh-74b774252/"   ><img src={linkedin} alt="Linkedin Page" className="clientImg" /></a>
                    <a href=" https://github.com/Roushankumarsingh"  ><img src={github} alt="github" className="clientImg" /></a>
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me Through Email</h1>
                <span className="clientDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form}  onSubmit={sendEmail}   >
                    <input type="text" className='name' placeholder='Your Name' name="from_name" />
                    <input type="email" className='email' placeholder="Your Email" name="from_email" />
                    <textarea name="message" rows="5" placeholder='Your Message' className='msg' ></textarea>
                    <button type="submit" value="send" className='submitbtn'  >Submit</button>
                </form>
            </div>
        </section>
    )
}




