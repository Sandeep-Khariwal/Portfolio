import React from 'react'
import {motion} from "framer-motion"

import crud from "../images/crud.jpg"
import apc from "../images/ApcLogo.jpg"
import todo from "../images/todo.jpg"
import calculator from "../images/calculator.webp"
import cart from "../images/cart.png"

const Projects = () => {
  return (
    <section className='myProjects' >
      <h1>MY PROJECT'S</h1>
      <motion.div className='projects'
      initial={{y:"20%" , opacity:0}}
      whileInView={{y:"0%" , opacity:1}}
      transition={{duration:1}}
      >
       
       <div className='project' >
        <img src={crud} alt='not supported'/>
        <h5><a href="https://sandeep-khariwal.github.io/CRUD-App/" >CRUD/MERN</a></h5>
       </div>
       

       <div className='project' >
        <img src={todo} alt='not supported'/>
        <h5><a href="https://sandeep-khariwal.github.io/ToDo-List/" >ToDo-List/ReactJs</a></h5>
       </div>

       <div className='project' >
        <img src={calculator} alt='not supported'/>
        <h5><a href="https://sandeep-khariwal.github.io/Calculator-with-React/" >Calculator/React</a></h5>
       </div>

       <div className='project' >
        <img src={apc} alt='not supported'/>
        <h5><a href="https://sandeep-khariwal.github.io/APC-Society/" >Society Website</a></h5>
       </div>

       <div className='project' >
        <img src={cart} alt='not supported'/>
        <h5><a href="https://sandeep-khariwal.github.io/Add-To-Cart/" >Cart-Redux/Toolkit</a></h5>
       </div>

      </motion.div>
    </section>
  )
}

export default Projects
