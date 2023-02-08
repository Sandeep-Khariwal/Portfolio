import React from 'react'
import {AccountBox, Home, SaveAs , LaptopChromebook} from "@mui/icons-material"
import {motion} from "framer-motion"
import Item from '../items/Item';
import image from "../images/myImage.jpg"
import { Routes, Route , Link  } from 'react-router-dom';
import About from './About';
import HomeComponent from './HomeComponent';
import MySkills from './MySkills';
import Projects from './Projects';
import Error from './Error';

const HomePage = () => {
 
return (
<div className='App' >

<motion.div 
  className='sidebar-container'>
    <motion.div className='sidebar'>

      {/* code for profile */}
      <motion.div 
      className='profile'>
      <img src={image} alt='not found' />
      </motion.div>

      {/* code for groupes */}
      <div className='groups'>
      <div className='group' >
        {/* group 1 */}
        <motion.h3>INFORMATION</motion.h3>
        <Link to={"/"} ><Item icon={<Home/>} name="Home"/></Link>
        <Link to={"/About"} ><Item icon={<AccountBox/>} name="About"/></Link>  
      </div>

      <div className='group'>
        <motion.h3>SKILLS</motion.h3>
        <Link to={"/skills"} ><Item icon={<SaveAs/>} name="Skills"/></Link>
        <Link to={"/Projects"} ><Item icon={<LaptopChromebook/>} name="Projects"/></Link>
      </div>

      </div>
    </motion.div>
  </motion.div>

  <div className='body-container'>

  <Routes>
    <Route path='/' element={<HomeComponent/>} ></Route>
    <Route path='/About' element={<About/>} ></Route>
    <Route path='/Skills' element={<MySkills/> } ></Route>
    <Route path='/Projects' element={<Projects/> } ></Route>
    <Route path='*' element={<Error/>} ></Route>
  </Routes>

  </div>
</div>
  );
}

export default HomePage
