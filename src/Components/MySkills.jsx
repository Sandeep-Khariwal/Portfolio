import React from 'react';
import {motion} from "framer-motion"

import cpp from "../images/cpp.png"
import css from "../images/css.png"
import dsa from "../images/dsa.png"
import github from "../images/github.webp"
import react from "../images/react.jpg"
import html from "../images/html.png"
import js from "../images/javascript.png"
import mongodb from "../images/mongodb.webp"
import nodeExpress from "../images/nodexpressjs.webp"
import ReduxToolkit from "../images/reduxtoolkit.jpeg"
import vsCode from "../images/vcode.png"


const MySkills = () => {
  return (
    <section className='skillsSection' >
      <motion.div className='skill-wrapper'
      initial={{y:"10%" , opacity:0}}
      whileInView={{y:"0%" , opacity:1}}
      transition={{duration:1}}
      >
        {/* skills */}
       <div className='skills'>
        <span>SKILLS</span>

        <div className='skills-logi' >
          <img src={html} alt="not supported" />
        </div>
        <div className='skills-logi' >
          <img src={css} alt="not supported" />
        </div>
        <div className='skills-logi'>
          <img src={js} alt="not supported"/>
        </div>

       <div className='skills-logi' >
         <img src={react} alt="not supported" />
        </div>
        <div className='skills-logi' >
         <img src={cpp} alt="not supported" />
        </div>
       </div>
      {/* familiar with */}
       <div className='familiar-skills' >
       <span>FAMILIAR WITH</span>
        <div className='skills-logi' >
         <img src={dsa} alt="not supported" />
        </div>

        <div className='skills-logi' >
         <img src={nodeExpress} alt="not supported" />
        </div>
        <div className='skills-logi' >
         <img src={mongodb} alt="not supported" />
        </div>
        <div className='skills-logi' >
         <img src={ReduxToolkit} alt="not supported" />
        </div>
      </div>
      
      <div className='tools' >
      <span>TOOLS</span>
      <div className='skills-logi' >
         <img src={github} alt="not supported" />
        </div>
        <div className='skills-logi' >
         <img src={vsCode} alt="not supported" />
        </div>
      </div>

      </motion.div>
    </section>
  )
}

export default MySkills
