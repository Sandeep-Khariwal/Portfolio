import React from 'react';
import {motion}from "framer-motion"
import img1 from "../images/pic1.jpg"
import img2 from "../images/pic2.jpg"

const About = () => {

  return (
    <section>
     <div className='about'>
     <motion.div className='pic1'
      initial={{y:"10%" , opacity:0}}
      whileInView={{y:"0%", opacity:1 }}
      transition={{duration:1}}
      >
        <img src={img2} alt="not supporting" />
        <img src={img1} alt="not supporting" />
        <h4>Click on Edge</h4>
      </motion.div>
   
      <motion.div className='story'
      initial={{y:"10%" , opacity:0}}
      whileInView={{y:"0%", opacity:1 }}
      transition={{duration:1}}
      >
      <p className='myStory' >MY STORY</p>
      <h2 className='h2' >WHO AM I?</h2>
      <p className='content' >I am doing Bachelor of Vocational in Software Development from Ramanujan College, University of Delhi.
        As a fullstack web developer,
        I've spent countless hours tinkering with code,  perfecting designs, and pushing the limits of what's possible on the web. 
        All in all, I'm a tech enthusiast with a passion for constantly learning and improving my skills.
        I'm Looking for the intern as well as full time job opportunity. </p>
      </motion.div>
    </div> 
     
    </section>
  )
}

export default About
