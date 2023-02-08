import React from 'react'
import {motion} from "framer-motion"
import Typewriter from "typewriter-effect"
import resume  from "../images/myResume.pdf"

const HomeComponent = () => {
  return (
    <motion.div 
    initial={{x:"+100%" , opacity:1}}
    whileInView={{x:"0%", opacity:1 }}
    transition={{duration:1 }}
    className="banner">
        <h3>HELLO, I AM<span><Typewriter
            options={{
            strings: "SANDEEP KHARIWAL",
            autoStart: true,
            loop: true,
        }} /> </span></h3>

        <h4> I am a,<span><Typewriter
          options={{
          strings: ['React-Developer', 'MERN Developer', 'Web Developer'],
          autoStart: true,
          loop: true,
        }} /> </span> </h4>

        <a href={resume}>
          <button>
          <h3>Download My Resume</h3>
          </button>
        </a>
    </motion.div>
  )
}

export default HomeComponent
